const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
  // Force default light mode tuwing open/reload
  body.classList.remove("dark-mode");
});

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
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
