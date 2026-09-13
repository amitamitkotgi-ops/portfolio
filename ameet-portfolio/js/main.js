/**
 * main.js
 * ------------------------------------------------------------------
 * Navigation behaviour, theme toggle, scroll progress, back-to-top,
 * and the contact form. Project/skill rendering lives in projects.js.
 * ------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- Page loader ---------------- */
  const loader = document.getElementById("page-loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader && loader.classList.add("hidden"), 200);
  });

  /* ---------------- Theme toggle ---------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") root.setAttribute("data-theme", "light");

  function updateThemeIcon() {
    if (!themeToggle) return;
    const isLight = root.getAttribute("data-theme") === "light";
    themeToggle.innerHTML = isLight
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  }
  updateThemeIcon();

  themeToggle && themeToggle.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("portfolio-theme", "light");
    }
    updateThemeIcon();
  });

  /* ---------------- Scroll spy (active nav link) ----------------
     Declared before the scroll handler below, because onScroll()
     calls updateActiveNavLink() immediately on page load — if this
     block came after, "sections" would not exist yet. */
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav-link[href^='#']"));

  function updateActiveNavLink() {
    let currentId = sections[0] && sections[0].id;
    const scrollPos = window.scrollY + 120;

    for (const section of sections) {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    }

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  }

  /* ---------------- Navbar scroll state + progress + back-to-top ---------------- */
  const navbar = document.getElementById("navbar");
  const progressBar = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    navbar && navbar.classList.toggle("scrolled", scrollTop > 12);
    progressBar && (progressBar.style.width = pct + "%");
    backToTop && backToTop.classList.toggle("visible", scrollTop > 480);

    updateActiveNavLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop && backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- Mobile menu ---------------- */
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  navToggle && navToggle.addEventListener("click", () => {
    const open = navToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  document.querySelectorAll(".mobile-menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  /* ---------------- Contact form ---------------- */
  const form = document.getElementById("contact-form");
  if (form) {
    const statusEl = document.getElementById("form-status");

    function setFieldError(field, message) {
      const wrapper = field.closest(".form-field");
      wrapper.classList.toggle("invalid", Boolean(message));
      const errorEl = wrapper.querySelector(".error-msg");
      if (errorEl) errorEl.textContent = message || "";
    }

    function validateField(field) {
      const value = field.value.trim();
      if (field.hasAttribute("required") && !value) {
        setFieldError(field, "This field is required.");
        return false;
      }
      if (field.type === "email" && value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          setFieldError(field, "Enter a valid email address.");
          return false;
        }
      }
      setFieldError(field, "");
      return true;
    }

    form.querySelectorAll("input, textarea").forEach(field => {
      field.addEventListener("blur", () => validateField(field));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = Array.from(form.querySelectorAll("input, textarea"));
      const allValid = fields.map(validateField).every(Boolean);
      if (!allValid) {
        statusEl.textContent = "Please fix the highlighted fields.";
        statusEl.style.color = "#F87171";
        return;
      }

      // No backend is connected yet — fall back to a pre-filled mailto link
      // instead of pretending the message was sent.
      const name = form.querySelector("#contact-name").value.trim();
      const email = form.querySelector("#contact-email").value.trim();
      const subject = form.querySelector("#contact-subject").value.trim();
      const message = form.querySelector("#contact-message").value.trim();
      const targetEmail = PORTFOLIO_DATA.profile.email;

      const body = `From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
      const mailto = `mailto:${targetEmail}?subject=${encodeURIComponent(subject || "Portfolio contact")}&body=${body}`;

      window.location.href = mailto;
      statusEl.style.color = "var(--success)";
      statusEl.textContent = "Opening your email app to send this message...";
    });
  }
});
