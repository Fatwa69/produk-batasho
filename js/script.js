//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.getElementById("hamburger-menu").addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
//klik luar sidebar hilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
