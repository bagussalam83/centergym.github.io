const navbar = document.querySelector(".nav-link");
// ketika humbergur menu di klik akan muncul side bar
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
