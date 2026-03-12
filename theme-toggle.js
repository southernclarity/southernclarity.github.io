<script>
(function () {
  const storageKey = "southern-clarity-theme";
  const toggleItemId = "theme-toggle-item";
  const toggleLinkId = "theme-toggle-link";

  function ensureToggle() {
    const rightNav = document.querySelector(".navbar .navbar-nav.ms-auto");
    if (!rightNav) return null;

    let toggleItem = document.getElementById(toggleItemId);
    if (!toggleItem) {
      toggleItem = document.createElement("li");
      toggleItem.id = toggleItemId;
      toggleItem.className = "nav-item compact";
      toggleItem.innerHTML = '<a id="' + toggleLinkId + '" class="nav-link theme-toggle-link" href="#" role="button" tabindex="0" aria-label="Toggle theme" title="Toggle theme"><i class="bi bi-moon-stars-fill" aria-hidden="true"></i></a>';
      rightNav.appendChild(toggleItem);
    }

    return document.getElementById(toggleLinkId);
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("theme-dark", isDark);
    document.body.classList.toggle("quarto-dark", isDark);
    document.body.classList.toggle("quarto-light", !isDark);

    const bootstrapStylesheet = document.getElementById("quarto-bootstrap");
    if (bootstrapStylesheet) {
      bootstrapStylesheet.setAttribute("data-mode", isDark ? "dark" : "light");
    }

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.setAttribute("data-bs-theme", isDark ? "dark" : "light");
    }

    const footer = document.querySelector(".footer");
    if (footer) {
      footer.setAttribute("data-bs-theme", isDark ? "dark" : "light");
    }

    const themeLink = ensureToggle();
    if (themeLink) {
      themeLink.setAttribute("aria-pressed", isDark ? "true" : "false");
      themeLink.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      themeLink.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
      const icon = themeLink.querySelector("i");
      if (icon) {
        icon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
      }
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  }

  function initToggle() {
    const themeToggle = ensureToggle();
    if (!themeToggle) return;

    if (themeToggle.dataset.initialized === "true") return;
    themeToggle.dataset.initialized = "true";

    themeToggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });

    themeToggle.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }

  function bootThemeToggle() {
    ensureToggle();
    applyTheme(getInitialTheme());
    initToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootThemeToggle);
  } else {
    bootThemeToggle();
  }
})();
</script>
