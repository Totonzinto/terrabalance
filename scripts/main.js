// Webfont Loader
WebFont.load({
  google: {
    families: ["Inter", "Montserrat"],
  },
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
