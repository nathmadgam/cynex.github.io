/**
 * Cynex portfolio — site behaviour.
 * Renders list content from data.js and wires up navigation, the demo player,
 * the contract viewer, and the inquiry form. No external dependencies.
 */
import {
  projects,
  games,
  capabilities,
  process,
  robloxGroups,
  discordServers,
  reviews,
} from "./data.js";

const CONTACT_EMAIL = "nathanielmadridgaminde@proton.me";

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const escapeHtml = value =>
  String(value).replace(/[&<>"']/g, character =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);

const icon = (name, className = "icon") =>
  `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

/** Swap to the local SVG fallback when a cached bitmap is missing. */
function attachImageFallbacks(root) {
  qsa("img[data-fallback]", root).forEach(image => {
    image.addEventListener("error", () => {
      const fallback = image.dataset.fallback;
      if (!fallback || image.src.endsWith(fallback)) return;
      image.src = fallback;
    }, { once: true });
  });
}

/* ------------------------------------------------------------------ render */

function renderProjects() {
  const list = qs("[data-project-list]");
  if (!list) return;
  list.innerHTML = projects.map(project => `
    <article class="project reveal">
      <button class="project-media" type="button"
              data-video="${escapeHtml(project.video)}"
              data-title="${escapeHtml(project.title)}"
              aria-label="Play the ${escapeHtml(project.title)} demo">
        <img src="${escapeHtml(project.poster)}" alt="Still frame from the ${escapeHtml(project.title)} demo"
             width="960" height="540" loading="lazy" decoding="async">
        <span class="play-badge" aria-hidden="true">${icon("play")}</span>
      </button>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-meta">
          <span>${escapeHtml(project.category)}</span>
          <span class="sep" aria-hidden="true">/</span>
          <span>${escapeHtml(project.year)}</span>
        </p>
        <p class="project-copy">${escapeHtml(project.description)}</p>
        <p class="project-tags">${project.tags.map(escapeHtml).join(" &middot; ")}</p>
      </div>
    </article>`).join("");
}

function renderExperiences() {
  const list = qs("[data-experience-list]");
  if (!list) return;
  list.innerHTML = games.map(game => `
    <article class="experience reveal">
      <img class="experience-thumb" src="${escapeHtml(game.cachedImage ?? game.fallback)}"
           data-fallback="${escapeHtml(game.fallback)}"
           alt="Thumbnail for ${escapeHtml(game.name)}"
           width="496" height="279" loading="lazy" decoding="async">
      <div>
        <h3 class="experience-name">${escapeHtml(game.name)}</h3>
        <p class="experience-meta">${escapeHtml(game.creator)} &middot; ${escapeHtml(game.role)}</p>
        <p class="experience-copy">${escapeHtml(game.description)}</p>
        <a class="text-link" href="${escapeHtml(game.url)}" target="_blank" rel="noopener noreferrer">
          Open on Roblox${icon("external")}
        </a>
      </div>
    </article>`).join("");
  attachImageFallbacks(list);
}

function renderCapabilities() {
  const list = qs("[data-capability-list]");
  if (!list) return;
  list.innerHTML = capabilities.map(item => `
    <div class="capability reveal">
      <dt>${escapeHtml(item.title)}</dt>
      <dd>${escapeHtml(item.description)}</dd>
    </div>`).join("");
}

function renderProcess() {
  const list = qs("[data-process-list]");
  if (!list) return;
  list.innerHTML = process.map((step, index) => `
    <li class="process-step reveal">
      <span class="process-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(step.title)}</h3>
      <p>${escapeHtml(step.description)}</p>
    </li>`).join("");
}

function renderNetwork() {
  const entry = (item, external) => `
    <li>
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
        <img src="${escapeHtml(item.cachedImage ?? item.fallback)}"
             data-fallback="${escapeHtml(item.fallback)}"
             alt="" width="44" height="44" loading="lazy" decoding="async">
        <span class="network-copy">
          <strong>${escapeHtml(item.name)}</strong>
          <small>${escapeHtml(item.description)}</small>
        </span>
        <span class="network-role">${escapeHtml(item.role)}</span>
      </a>
    </li>`;

  const groups = qs("[data-roblox-groups]");
  const servers = qs("[data-discord-servers]");
  if (groups) {
    groups.innerHTML = robloxGroups.map(entry).join("");
    attachImageFallbacks(groups);
  }
  if (servers) {
    servers.innerHTML = discordServers.map(entry).join("");
    attachImageFallbacks(servers);
  }
}

function renderReviews() {
  const list = qs("[data-review-list]");
  if (!list) return;
  list.innerHTML = reviews.map(review => `
    <li class="review reveal">
      <p class="review-stars" role="img" aria-label="${review.rating} out of 5 stars">
        ${icon("star").repeat(review.rating)}
      </p>
      <blockquote>${escapeHtml(review.quote)}</blockquote>
      <p class="review-by">
        ${escapeHtml(review.name)}
        ${review.repeatClient ? '<span class="review-repeat">Repeat client</span>' : ""}
      </p>
      <p class="review-facts">
        ${escapeHtml(review.location)} &middot; ${escapeHtml(review.price)} &middot;
        ${escapeHtml(review.duration)} &middot; ${escapeHtml(review.age)}
      </p>
    </li>`).join("");
}

/* ---------------------------------------------------------------- behaviour */

function setupHeader() {
  const header = qs("[data-header]");
  if (!header) return;
  const sentinel = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  sentinel();
  addEventListener("scroll", sentinel, { passive: true });
}

function setupMobileNav() {
  const toggle = qs("[data-menu-toggle]");
  const nav = qs("[data-mobile-nav]");
  if (!toggle || !nav) return;

  const setOpen = open => {
    nav.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = icon(open ? "x" : "menu");
  };

  toggle.addEventListener("click", () => setOpen(nav.hidden));
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) setOpen(false);
  });
  addEventListener("keydown", event => {
    if (event.key === "Escape" && !nav.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  matchMedia("(min-width: 900px)").addEventListener("change", event => {
    if (event.matches) setOpen(false);
  });
}

/** Mark the nav link matching the section currently in view. */
function setupScrollSpy() {
  const links = qsa('.primary-nav a[href^="#"], .mobile-nav a[href^="#"]');
  if (!links.length || !("IntersectionObserver" in window)) return;

  // Keep document order so the topmost visible section wins, not link order.
  const linked = new Set(links.map(link => link.hash.slice(1)));
  const sections = qsa("main section[id]").filter(section => linked.has(section.id));

  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });
    const current = sections.find(section => visible.has(section.id))?.id;
    links.forEach(link => {
      if (current && link.hash === `#${current}`) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(section => observer.observe(section));
}

/** Group-level reveal: one observer, elements fade in place. */
function setupReveal() {
  const targets = qsa(".reveal");
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    targets.forEach(target => target.classList.add("is-static"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  targets.forEach(target => observer.observe(target));
}

function setupPlayer() {
  const dialog = qs("[data-player]");
  const video = qs("[data-player-video]", dialog ?? document);
  const title = qs("[data-player-title]", dialog ?? document);
  const close = qs("[data-player-close]", dialog ?? document);
  if (!dialog || !video || !title || !close) return;

  const open = trigger => {
    title.textContent = trigger.dataset.title ?? "Project demo";
    video.src = trigger.dataset.video;
    dialog.showModal();
    video.play().catch(() => { /* autoplay may be blocked; controls remain */ });
  };

  const shut = () => {
    video.pause();
    video.removeAttribute("src");
    video.load();
  };

  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-video]");
    if (trigger) open(trigger);
  });

  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", shut);
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
}

function setupContract() {
  const contract = qs("[data-contract]");
  if (!contract) return;
  const viewport = qs("[data-contract-viewport]", contract);
  const current = qs("[data-contract-current]", contract);
  const previous = qs("[data-contract-prev]", contract);
  const next = qs("[data-contract-next]", contract);
  const pages = qsa("[data-contract-page]", contract);
  if (!viewport || !pages.length) return;

  let index = 0;

  const sync = () => {
    current.textContent = String(index + 1);
    previous.disabled = index === 0;
    next.disabled = index === pages.length - 1;
  };

  const goTo = target => {
    index = Math.min(Math.max(target, 0), pages.length - 1);
    pages[index].scrollIntoView({
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
    sync();
  };

  previous.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const active = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      index = pages.indexOf(active.target);
      sync();
    }, { root: viewport, threshold: 0.55 });
    pages.forEach(page => observer.observe(page));
  }

  sync();
}

function setupInquiryForm() {
  const form = qs("[data-inquiry-form]");
  if (!form) return;
  const status = qs("[data-inquiry-status]", form);
  const statusText = qs("span", status);

  form.addEventListener("submit", event => {
    event.preventDefault();

    const fields = qsa("input, select, textarea", form);
    fields.forEach(field => field.removeAttribute("aria-invalid"));

    const invalid = fields.find(field => !field.checkValidity());
    if (invalid) {
      invalid.setAttribute("aria-invalid", "true");
      invalid.focus();
      status.hidden = false;
      statusText.textContent = "Please complete the highlighted field.";
      return;
    }

    const data = new FormData(form);
    const get = key => String(data.get(key) ?? "").trim();
    const subject = `Roblox project inquiry — ${get("projectType")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Project type: ${get("projectType")}`,
      `Target timeline: ${get("timeline") || "Not specified"}`,
      "",
      "Brief:",
      get("brief"),
    ].join("\n");

    status.hidden = false;
    statusText.textContent = "Email prepared — your mail app should open shortly.";
    location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* --------------------------------------------------------------------- init */

renderProjects();
renderExperiences();
renderCapabilities();
renderProcess();
renderNetwork();
renderReviews();

setupHeader();
setupMobileNav();
setupScrollSpy();
setupPlayer();
setupContract();
setupInquiryForm();
setupReveal();
