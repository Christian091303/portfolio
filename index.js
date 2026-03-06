const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  const burger = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav');

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  const resumeBtn = document.getElementById("resumeBtn");
  const modal = document.getElementById("resumeModal");
  const closeBtn = document.querySelector(".close-btn");

  if (resumeBtn && modal && closeBtn) {
    resumeBtn.addEventListener("click", function(e){
      e.preventDefault();
      modal.classList.add("active");
      document.body.classList.add("modal-open");
    });

    closeBtn.addEventListener("click", function(){
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    });

    window.addEventListener("click", function(e){
      if(e.target === modal){
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
      }
    });
  }
});

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
