const config = {
  discordUrl: "https://discord.gg/yWn6thdVCf",
  tiktokUrl: "https://www.tiktok.com/@eternityfa",
  fivemConnectUrl: "", // Exemple: fivem://connect/127.0.0.1:30120
  playerCountLabel: "0 / 128 joueurs",
};

const defaultNews = [
  {
    title: "Eternity est en developpement",
    body: "La ville se prepare, les services se structurent et les premieres annonces arrivent sur Discord.",
    date: "Mai 2026",
  },
  {
    title: "Recrutements ouverts",
    body: "Staff, LSPD, EMS, BCSO et entreprises peuvent deja preparer leurs dossiers de candidature.",
    date: "Bientot",
  },
  {
    title: "Lore mystere actif",
    body: "Le seisme, le blackout et le silence du gouvernement seront au coeur des enquetes en jeu.",
    date: "Saison 1",
  },
];

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const toast = document.querySelector("[data-toast]");
const playerCount = document.querySelector("[data-player-count]");
const newsList = document.querySelector("[data-news-list]");

const helpAnswers = {
  discord: {
    label: "Discord",
    answer: "Pour rejoindre la communaute, ouvrir un ticket ou prevenir le staff, clique sur le bouton Discord du site.",
    target: config.discordUrl,
  },
  staff: {
    label: "Candidature staff",
    answer: "La candidature staff se fait via le Google Form. Clique sur le bouton Candidater dans la section Candidature, puis viens prevenir le staff sur Discord.",
    target: "#candidature",
  },
  boutique: {
    label: "Boutique",
    answer: "La boutique presente les VIP, vehicules, coins, packs et proprietes. Les demandes passent ensuite par Discord.",
    target: "#boutique",
  },
  metiers: {
    label: "Metiers",
    answer: "Les metiers et entreprises disponibles sont listes dans la section Entreprises.",
    target: "#metiers",
  },
  reglement: {
    label: "Reglement",
    answer: "Le reglement rapide est disponible sur le site. Pour les cas precis, ouvre un ticket Discord.",
    target: "#reglement",
  },
  fivem: {
    label: "FiveM",
    answer: "Le bouton connexion FiveM sera actif quand l'adresse du serveur sera ajoutee. Le serveur est encore en developpement.",
    target: "#accueil",
  },
};

playerCount.textContent = config.playerCountLabel;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function addHelpMessage(text, type = "bot") {
  const messages = document.querySelector("[data-help-messages]");
  const message = document.createElement("p");
  message.className = type === "user" ? "user-message" : "bot-message";
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

document.querySelector("[data-help-toggle]").addEventListener("click", () => {
  document.querySelector("[data-help-panel]").hidden = false;
});

document.querySelector("[data-help-close]").addEventListener("click", () => {
  document.querySelector("[data-help-panel]").hidden = true;
});

document.querySelectorAll("[data-help-question]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = helpAnswers[button.dataset.helpQuestion];
    addHelpMessage(item.label, "user");
    addHelpMessage(item.answer);

    if (item.target.startsWith("#")) {
      document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(item.target, "_blank", "noopener,noreferrer");
    }
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
  }
});

document.querySelectorAll("[data-connect]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!config.fivemConnectUrl) {
      showToast("Ajoute l'adresse FiveM dans script.js pour activer la connexion directe.");
      return;
    }
    window.location.href = config.fivemConnectUrl;
  });
});

function getNews() {
  const stored = localStorage.getItem("eternity-news");
  if (!stored) return defaultNews;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultNews;
  } catch {
    return defaultNews;
  }
}

function saveNews(items) {
  localStorage.setItem("eternity-news", JSON.stringify(items));
}

function renderNews() {
  const items = getNews();
  newsList.innerHTML = items
    .map(
      (item) => `
        <article class="news-card">
          <span>${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

renderNews();

document.querySelectorAll("[data-shop]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`Demande ${button.dataset.shop}: ouvre un ticket boutique sur Discord.`);
    window.open(config.discordUrl, "_blank", "noopener,noreferrer");
  });
});

const sections = Array.from(document.querySelectorAll("main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
