const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
const start = document.getElementById("start");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
  start.classList.add("h-72");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
  start.classList.remove("h-72");
});
