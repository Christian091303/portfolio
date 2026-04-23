const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  const today = new Date().toDateString();
  const savedTheme = localStorage.getItem("theme");
  const savedDate = localStorage.getItem("themeDate");

  if (savedDate !== today) {
    localStorage.removeItem("theme");
    localStorage.setItem("themeDate", today);
  }

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    if (currentTheme === "dark") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  } else {
    // Default based sa oras
    if (hour >= 6 && hour < 18) {
      body.classList.remove("dark-mode"); 
    } else {
      body.classList.add("dark-mode"); 
    }
  }
});

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem("theme", body.classList.contains('dark-mode') ? "dark" : "light");
    localStorage.setItem("themeDate", new Date().toDateString());
  });
}
