document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // ✅ SESSION STORAGE (instead of localStorage)
  const savedTheme = sessionStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode"); // default light
  }

  // ✅ DARK MODE TOGGLE
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      sessionStorage.setItem(
        "theme",
        body.classList.contains('dark-mode') ? "dark" : "light"
      );
    });
  }

  // ✅ BURGER MENU
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

  // ✅ MODAL
  const resumeBtn = document.getElementById("resumeBtn");
  const modal = document.getElementById("resumeModal");
  const closeBtn = document.querySelector(".close-btn");

  if (resumeBtn && modal && closeBtn) {
    resumeBtn.addEventListener("click", function(e){
      e.preventDefault();
      modal.classList.add("active");
      body.classList.add("modal-open");
    });

    closeBtn.addEventListener("click", function(){
      modal.classList.remove("active");
      body.classList.remove("modal-open");
    });

    window.addEventListener("click", function(e){
      if(e.target === modal){
        modal.classList.remove("active");
        body.classList.remove("modal-open");
      }
    });
  }
});
