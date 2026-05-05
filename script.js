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

const staffAccessCode = "ETERNITYSTAFF";
const staffRoles = {
  fullManagement: {
    label: "Gestion complete",
    roles: ["[ 🌌 ] Gérant illégal", "[ 🌊 ] Gérant légal", "[ 🚗 ] Responsable event"],
    permissions: [
      "viewApplications",
      "archiveApplications",
      "restoreApplications",
      "postNews",
      "manageLegal",
      "manageIllegal",
      "manageEvents",
    ],
  },
  communication: {
    label: "Communication",
    roles: ["[ 💻 ] Responsable Communication"],
    permissions: ["postNews", "postVideos", "manageSocialLinks"],
  },
  readOnlyStaff: {
    label: "Lecture staff",
    roles: [
      "[ 🛡 ] Super-Admin",
      "[ 🛡 ] Administrateur",
      "[ 🛡 ] Super-Modo",
      "[ 🛡 ] Modérateur",
      "[ 🛡 ] Helper",
      "[ 🛡 ] Support discord",
      "[ 🟣 ] Team Staff",
    ],
    permissions: ["viewApplications"],
  },
};
const staffQuestions = [
  {
    id: "presentation",
    type: "textarea",
    label: "Présente toi : \nTon prénom, ton âge, ton discord, t’es heure ou tu est disponible.",
    required: true,
  },
  {
    id: "whyStaff",
    type: "textarea",
    label: "Pourquoi souhaitez-vous rejoindre le staff de Eternity ?",
    required: true,
  },
  {
    id: "qualities",
    type: "textarea",
    label: "Quelles qualités pensez-vous apporter à l’équipe ?",
    required: true,
  },
  {
    id: "ruleBreaker",
    type: "textarea",
    label: "Comment réagiriez-vous face à un joueur qui enfreint les règles ?",
    required: true,
  },
  {
    id: "conflictStory",
    type: "textarea",
    label: "Parlez-nous d’une situation où vous avez dû gérer un conflit. Comment l’avez-vous résolu ?",
    required: true,
  },
  {
    id: "serverManagement",
    type: "textarea",
    label: "Comment définiriez-vous une bonne gestion d’un serveur RP ?",
    required: true,
  },
  {
    id: "metagamingAccusation",
    type: "radio",
    label: "Que faites-vous si un joueur accuse un autre de métagaming ?",
    required: true,
    options: [
      "a) Je le mute immédiatement.",
      "b) J’ouvre un ticket et demande des preuves.",
      "c) J’ignore l’accusation.",
      "d) Je bannis le joueur accusé sans vérification.",
    ],
  },
  {
    id: "decisionCriticism",
    type: "radio",
    label: "Un joueur critique une décision que vous avez prise. Que faites-vous ?",
    required: true,
    options: [
      "a) Je lui demande d’ouvrir un ticket pour discuter.",
      "b) Je l’ignore, car je suis le staff.",
      "c) Je supprime ses messages et le mute.",
      "d) Je quitte le serveur pour éviter le conflit.",
    ],
  },
  {
    id: "complaintProof",
    type: "radio",
    label: "Comment vérifiez-vous qu’une plainte est justifiée ?",
    required: true,
    options: [
      "a) Je demande des preuves (captures d’écran, vidéos).",
      "b) Je crois le premier joueur qui m’a contacté.",
      "c) Je décide au hasard.",
      "d) Je ne m’occupe pas des plaintes.",
    ],
  },
  {
    id: "neutrality",
    type: "radio",
    label: "Un staff doit toujours rester neutre, même en cas de conflit impliquant un ami. (Vrai/Faux)",
    required: true,
    options: ["Vrai", "Faux"],
  },
  {
    id: "punishWithoutProof",
    type: "radio",
    label: "Il est acceptable de punir un joueur sans preuve, si je pense qu’il a tort. (Vrai/Faux)",
    required: true,
    options: ["Vrai", "Faux"],
  },
  {
    id: "teamDecisions",
    type: "radio",
    label: "Les décisions importantes du staff doivent être discutées en équipe. (Vrai/Faux)",
    required: true,
    options: ["Vrai", "Faux"],
  },
  {
    id: "staffPowers",
    type: "radio",
    label: "Le staff peut utiliser ses pouvoirs en RP pour avantager son personnage. (Vrai/Faux)",
    required: true,
    options: ["Vrai", "Faux"],
  },
  {
    id: "rdmComplaint",
    type: "textarea",
    label:
      "Un joueur se plaint d’être victime de RDM. Comment procédez-vous pour gérer la situation ?\n\nRDM signifie Random Deathmatch.\nC'est une notion du Roleplay (RP) qui désigne le fait de tuer ou d'attaquer un autre joueur sans raison valable ou sans justification RP.",
    required: true,
  },
  {
    id: "staffAbuse",
    type: "textarea",
    label: "Vous remarquez qu’un staff utilise ses permissions pour avantager son gang en RP. Que faites-vous ?",
    required: true,
  },
  {
    id: "toxicDiscord",
    type: "textarea",
    label: "Un joueur écrit un message toxique envers un autre sur le Discord. Quelle est votre réaction ?",
    required: true,
  },
  {
    id: "bugScene",
    type: "textarea",
    label: "Une scène RP est interrompue par un bug technique. Que faites-vous en tant que staff ?",
    required: true,
  },
  {
    id: "metagamingDefinition",
    type: "textarea",
    label: "Qu’est-ce que le métagaming ?",
    required: true,
  },
  {
    id: "fearRp",
    type: "textarea",
    label: 'Que signifie le terme "Fear RP" ? Donnez un exemple.',
    required: true,
  },
  {
    id: "powergaming",
    type: "textarea",
    label: "Pourquoi le powergaming est-il interdit ?",
    required: true,
  },
  {
    id: "weeklyTime",
    type: "textarea",
    label: "Combien de temps pouvez-vous consacrer au serveur par semaine ?",
    required: true,
  },
  {
    id: "pastStaff",
    type: "textarea",
    label: "Avez-vous déjà fait partie du staff sur un autre serveur ? Si oui, lequel ?",
    required: true,
  },
  {
    id: "stress",
    type: "textarea",
    label: "Comment gérez-vous le stress ou les situations difficiles ?",
    required: true,
  },
  {
    id: "rpOrHrpConflicts",
    type: "textarea",
    label: "Préférez-vous gérer des conflits en RP ou en HRP ? Pourquoi ?",
    required: true,
  },
];

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const toast = document.querySelector("[data-toast]");
const playerCount = document.querySelector("[data-player-count]");
const newsList = document.querySelector("[data-news-list]");
const staffFields = document.querySelector("[data-staff-fields]");
const applicationsList = document.querySelector("[data-applications-list]");
const applicationDetail = document.querySelector("[data-application-detail]");
const applicationSearch = document.querySelector("[data-application-search]");
const archiveToggle = document.querySelector("[data-toggle-archive]");
const archiveStatus = document.querySelector("[data-archive-status]");
let showingArchive = false;

const helpAnswers = {
  discord: {
    label: "Discord",
    answer: "Pour rejoindre la communaute, ouvrir un ticket ou prevenir le staff, clique sur le bouton Discord du site.",
    target: config.discordUrl,
  },
  staff: {
    label: "Candidature staff",
    answer: "La candidature staff se remplit directement dans la section Candidature. Toutes les questions sont obligatoires.",
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

function renderStaffForm() {
  staffFields.innerHTML = staffQuestions
    .map((question) => {
      const required = question.required ? "required" : "";
      const label = `${escapeHtml(question.label).replaceAll("\n", "<br />")} <span class="required-mark">*</span>`;

      if (question.type === "radio") {
        const options = question.options
          .map(
            (option) => `
              <label class="choice-option">
                <input type="radio" name="${question.id}" value="${escapeHtml(option)}" ${required} />
                <span>${escapeHtml(option)}</span>
              </label>
            `
          )
          .join("");

        return `
          <fieldset class="choice-group">
            <legend>${label}</legend>
            ${options}
          </fieldset>
        `;
      }

      return `
        <label>
          <span>${label}</span>
          <textarea name="${question.id}" rows="4" ${required}></textarea>
        </label>
      `;
    })
    .join("");
}

function getApplications() {
  try {
    const applications = JSON.parse(localStorage.getItem("eternity-staff-applications") || "[]");
    return Array.isArray(applications) ? applications : [];
  } catch {
    return [];
  }
}

function saveApplications(applications) {
  localStorage.setItem("eternity-staff-applications", JSON.stringify(applications));
}

function getApplicantName(application) {
  const presentation = application.answers?.presentation || "";
  return presentation.split("\n")[0].slice(0, 48) || "Candidature staff";
}

function renderApplications(filter = "") {
  const applications = getApplications();
  const normalizedFilter = filter.trim().toLowerCase();
  const filtered = applications
    .filter((application) => Boolean(application.archived) === showingArchive)
    .filter((application) => {
      const searchable = JSON.stringify(application).toLowerCase();
      return searchable.includes(normalizedFilter);
    });

  archiveToggle.textContent = showingArchive ? "Voir les actives" : "Voir la corbeille";
  archiveStatus.textContent = showingArchive
    ? "Corbeille : les candidatures archivees restent recuperables."
    : "Candidatures actives.";

  if (!filtered.length) {
    applicationsList.innerHTML = `
      <div class="application-item">
        <strong>${showingArchive ? "Corbeille vide" : "Aucune candidature"}</strong>
        <span>${showingArchive ? "Les candidatures archivees apparaitront ici." : "Les nouvelles candidatures apparaitront ici."}</span>
      </div>
    `;
    applicationDetail.innerHTML = `
      <h3>Aucune candidature selectionnee</h3>
      <p>Choisis une candidature dans la liste pour voir toutes les reponses.</p>
    `;
    return;
  }

  applicationsList.innerHTML = filtered
    .map(
      (application) => `
        <div class="application-row">
          <button class="application-item" type="button" data-application-id="${application.id}">
            <strong>${escapeHtml(getApplicantName(application))}</strong>
            <span>${new Date(application.date).toLocaleString("fr-FR")}</span>
          </button>
          <button
            class="application-archive"
            type="button"
            data-archive-application="${application.id}"
            aria-label="${showingArchive ? "Restaurer la candidature" : "Archiver la candidature"}"
            title="${showingArchive ? "Restaurer" : "Archiver"}"
          >
            ${showingArchive ? "↩" : "×"}
          </button>
        </div>
      `
    )
    .join("");
}

function renderApplicationDetail(id) {
  const application = getApplications().find((item) => item.id === id);
  if (!application) return;

  document.querySelectorAll(".application-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.applicationId === id);
  });

  const answers = staffQuestions
    .map((question) => {
      const answer = application.answers?.[question.id] || "Non renseigne";
      return `
        <dt>${escapeHtml(question.label)}</dt>
        <dd>${escapeHtml(answer)}</dd>
      `;
    })
    .join("");

  applicationDetail.innerHTML = `
    <h3>${escapeHtml(getApplicantName(application))}</h3>
    <p>Envoyee le ${new Date(application.date).toLocaleString("fr-FR")}</p>
    <dl class="answer-list">${answers}</dl>
  `;
}

renderStaffForm();

document.querySelector("[data-admin-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const items = getNews();

  items.unshift({
    title: data.get("title").trim(),
    body: data.get("body").trim(),
    date: new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  });

  saveNews(items.slice(0, 6));
  renderNews();
  form.reset();
  showToast("Actualite ajoutee sur cette page.");
});

document.querySelector("[data-reset-news]").addEventListener("click", () => {
  localStorage.removeItem("eternity-news");
  renderNews();
  showToast("Actualites reinitialisees.");
});

document.querySelector("[data-staff-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    showToast("Toutes les questions sont obligatoires.");
    return;
  }

  const formData = new FormData(form);
  const answers = {};
  staffQuestions.forEach((question) => {
    answers[question.id] = formData.get(question.id)?.trim() || "";
  });
  const applications = getApplications();
  const application = {
    id: `staff-${Date.now()}`,
    answers,
    date: new Date().toISOString(),
  };

  applications.unshift(application);
  saveApplications(applications);

  const output = form.querySelector("[data-staff-output]");
  output.textContent = "Candidature enregistree. Va maintenant prevenir le staff sur Discord.";
  output.classList.add("is-visible");
  form.reset();
  renderApplications(applicationSearch.value);
  showToast("Candidature staff enregistree sur le site.");
});

document.querySelector("[data-staff-login]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const code = new FormData(form).get("code");

  if (code !== staffAccessCode) {
    showToast("Code staff incorrect.");
    return;
  }

  document.querySelector("[data-staff-dashboard]").hidden = false;
  form.hidden = true;
  renderApplications();
  showToast("Espace staff ouvert.");
});

applicationsList.addEventListener("click", (event) => {
  const archiveButton = event.target.closest("[data-archive-application]");
  if (archiveButton) {
    const applications = getApplications();
    const application = applications.find((item) => item.id === archiveButton.dataset.archiveApplication);
    if (!application) return;

    application.archived = !showingArchive;
    application.archivedAt = application.archived ? new Date().toISOString() : null;
    saveApplications(applications);
    renderApplications(applicationSearch.value);
    applicationDetail.innerHTML = `
      <h3>Aucune candidature selectionnee</h3>
      <p>Choisis une candidature dans la liste pour voir toutes les reponses.</p>
    `;
    showToast(application.archived ? "Candidature envoyee dans la corbeille." : "Candidature restauree.");
    return;
  }

  const item = event.target.closest("[data-application-id]");
  if (!item) return;
  renderApplicationDetail(item.dataset.applicationId);
});

applicationSearch.addEventListener("input", () => {
  renderApplications(applicationSearch.value);
});

archiveToggle.addEventListener("click", () => {
  showingArchive = !showingArchive;
  renderApplications(applicationSearch.value);
});

document.querySelector("[data-export-applications]").addEventListener("click", () => {
  const data = JSON.stringify(getApplications(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "candidatures-staff-eternity.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("[data-clear-applications]").addEventListener("click", () => {
  if (!confirm("Effacer toutes les candidatures staff enregistrees sur ce navigateur ?")) return;
  localStorage.removeItem("eternity-staff-applications");
  renderApplications();
  showToast("Candidatures effacees.");
});

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
