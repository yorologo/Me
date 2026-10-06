(() => {
  const root = document.documentElement;

  function getSavedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The page remains functional when storage is unavailable.
    }
  }

  const savedTheme = getSavedTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.classList.toggle("dark", savedTheme ? savedTheme === "dark" : prefersDark);

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
      currentYear.textContent = String(new Date().getFullYear());
    }

    function renderTheme(isDark) {
      root.classList.toggle("dark", isDark);

      if (themeIcon) {
        themeIcon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
      }

      if (themeToggle) {
        themeToggle.setAttribute(
          "aria-label",
          isDark ? "Switch to light mode" : "Switch to dark mode"
        );
      }
    }

    renderTheme(root.classList.contains("dark"));

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDark = !root.classList.contains("dark");
        renderTheme(isDark);
        saveTheme(isDark ? "dark" : "light");
      });
    }
  });
})();
