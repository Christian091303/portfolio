const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
});

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem("theme", body.classList.contains('dark-mode') ? "dark" : "light");
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.add('closing');
      setTimeout(() => {
        nav.classList.remove('active');
        nav.classList.remove('closing');
      }, 300);
    } else {
      nav.classList.add('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (nav.classList.contains('active')) {
      nav.classList.add('closing');
      setTimeout(() => {
        nav.classList.remove('active');
        nav.classList.remove('closing');
      }, 300);
    }
  });
}
