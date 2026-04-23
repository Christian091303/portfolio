document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const darkModeToggle = document.querySelector('.dark-mode-toggle');

  // SESSION STORAGE (para hindi magpersist after close)
  const sessionTheme = sessionStorage.getItem("theme");

  if (sessionTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode"); // default light
  }

  // DARK MODE TOGGLE
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      sessionStorage.setItem(
        "theme",
        body.classList.contains('dark-mode') ? "dark" : "light"
      );
    });
  }

  // MENU TOGGLE (same logic mo, inayos lang konti)
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        nav.classList.add('closing');
        setTimeout(() => {
          nav.classList.remove('active', 'closing');
        }, 300);
      } else {
        nav.classList.add('active');
      }
    });

    window.addEventListener('scroll', () => {
      if (nav.classList.contains('active')) {
        nav.classList.add('closing');
        setTimeout(() => {
          nav.classList.remove('active', 'closing');
        }, 300);
      }
    });
  }
});
