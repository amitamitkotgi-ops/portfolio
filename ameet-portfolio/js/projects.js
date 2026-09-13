/**
 * projects.js
 * ------------------------------------------------------------------
 * Reads PORTFOLIO_DATA (data.js) and renders it into the page.
 * Also owns the project filter and the project detail modal.
 * ------------------------------------------------------------------
 */

const icons = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 6 6 18M6 6l12 12"/></svg>'
};

document.addEventListener("DOMContentLoaded", () => {
  const { profile, quickStats, skills, filters, projects, journey, achievements, exploring } = PORTFOLIO_DATA;

  /* ---- Profile text + links (populate every [data-field]) ---- */
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.getAttribute("data-field");
    if (profile[key] !== undefined) el.textContent = profile[key];
  });

  document.querySelectorAll("[data-href]").forEach((el) => {
    const key = el.getAttribute("data-href");
    if (profile[key]) el.setAttribute("href", key === "email" ? `mailto:${profile[key]}` : profile[key]);
  });

  document.querySelectorAll("[data-resume-link]").forEach((el) => el.setAttribute("href", profile.resumePath));
  document.getElementById("footer-year") && (document.getElementById("footer-year").textContent = new Date().getFullYear());

  const aboutWrap = document.getElementById("about-paragraphs");
  if (aboutWrap) {
    aboutWrap.innerHTML = profile.aboutParagraphs.map(p => `<p class="reveal">${p}</p>`).join("");
  }

  /* ---- Quick stats ---- */
  const statsRow = document.getElementById("stats-row");
  if (statsRow) {
    statsRow.innerHTML = quickStats.map(s => `
      <div class="stat-card reveal">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join("");
  }

  /* ---- Skills ---- */
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = Object.entries(skills).map(([category, list]) => `
      <div class="skill-card reveal">
        <h3>${category}</h3>
        <div class="skill-list">
          ${list.map(s => `
            <div class="skill-row">
              <span>${s.name}</span>
              <span class="skill-level" data-level="${s.level}">${s.level}</span>
            </div>`).join("")}
        </div>
      </div>`).join("");
  }

  /* ---- Project filters ---- */
  const filterBar = document.getElementById("filter-bar");
  if (filterBar) {
    filterBar.innerHTML = filters.map((f, i) => `
      <button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`).join("");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.getAttribute("data-filter"));
    });
  }

  /* ---- Project cards ---- */
  const projectsGrid = document.getElementById("projects-grid");
  function renderProjects() {
    projectsGrid.innerHTML = projects.map(p => `
      <article class="project-card reveal" data-categories="${p.categories.join(",")}" data-id="${p.id}">
        <div class="project-media">
          <span class="project-status">${p.status}</span>
          <div class="media-icon">${icons.chip}</div>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <div class="project-subtitle">${p.subtitle}</div>
          <p class="project-desc">${p.description}</p>
          <div class="tech-tags">
            ${p.technologies.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("")}
            ${p.technologies.length > 4 ? `<span class="tag">+${p.technologies.length - 4}</span>` : ""}
          </div>
          <div class="project-actions">
            <button class="btn btn-secondary btn-sm" data-view="${p.id}">View Details</button>
            <a class="btn btn-ghost btn-sm" href="${p.github}" target="_blank" rel="noopener">${icons.github} GitHub</a>
          </div>
        </div>
      </article>`).join("");
  }
  renderProjects();

  function applyFilter(filter) {
    document.querySelectorAll(".project-card").forEach(card => {
      const cats = card.getAttribute("data-categories").split(",");
      const show = filter === "All" || cats.includes(filter);
      card.classList.toggle("hidden", !show);
    });
  }

  /* ---- Project modal ---- */
  const modalOverlay = document.getElementById("project-modal");
  const modalBox = document.getElementById("modal-box-content");

  function openModal(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;
    modalBox.innerHTML = `
      <button class="modal-close" aria-label="Close project details" data-close-modal>${icons.x}</button>
      <h2>${p.title}</h2>
      <div class="project-subtitle">${p.subtitle}</div>
      <div class="tech-tags" style="margin-top:16px;">${p.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</div>

      <div class="modal-section">
        <h4>Problem</h4>
        <p>${p.problem}</p>
      </div>
      <div class="modal-section">
        <h4>Solution</h4>
        <p>${p.solution}</p>
      </div>
      <div class="modal-section">
        <h4>Key Features</h4>
        <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <h4>Architecture</h4>
        <p>${p.architecture}</p>
      </div>
      <div class="modal-section">
        <h4>Future Improvements</h4>
        <ul>${p.futureImprovements.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>

      <div class="modal-actions">
        <a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">${icons.github} View on GitHub</a>
        ${p.demo ? `<a class="btn btn-secondary" href="${p.demo}" target="_blank" rel="noopener">${icons.external} Live Demo</a>` : ""}
      </div>
    `;
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    modalBox.querySelector("[data-close-modal]").addEventListener("click", closeModal);
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  projectsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-view]");
    if (btn) openModal(btn.getAttribute("data-view"));
  });
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ---- Timeline ---- */
  const timelineEl = document.getElementById("timeline");
  if (timelineEl) {
    timelineEl.innerHTML = journey.map(j => `
      <div class="timeline-item reveal">
        <span class="timeline-dot"></span>
        <h3>${j.title}</h3>
        <p>${j.description}</p>
      </div>`).join("");
  }

  /* ---- Achievements ---- */
  const achievementsGrid = document.getElementById("achievements-grid");
  if (achievementsGrid) {
    achievementsGrid.innerHTML = achievements.map(a => `
      <div class="achievement-card reveal">
        <span class="tag">${a.category}</span>
        <h4>${a.title}</h4>
        <p>${a.description}</p>
      </div>`).join("");
  }

  /* ---- Currently exploring ---- */
  const exploringGrid = document.getElementById("exploring-grid");
  if (exploringGrid) {
    exploringGrid.innerHTML = exploring.map(item => `
      <div class="exploring-card reveal">${item}</div>`).join("");
  }

  /* ---- GitHub repo cards (static — no fabricated stats) ---- */
  const repoGrid = document.getElementById("repo-grid");
  if (repoGrid) {
    repoGrid.innerHTML = projects.slice(0, 6).map(p => `
      <a class="repo-card reveal" href="${p.github}" target="_blank" rel="noopener">
        <div class="repo-name">${p.title.toLowerCase().replace(/\s+/g, "-")}</div>
        <p>${p.technologies.slice(0, 3).join(" \u00b7 ")}</p>
      </a>`).join("");
  }

  // Let animations.js know the DOM is ready for scroll-reveal wiring.
  document.dispatchEvent(new CustomEvent("portfolio:rendered"));
});
