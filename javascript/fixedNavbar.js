// fixed navbar
const navbar = document.getElementById("topbar");
const businessLogo = document.getElementById("business_logo");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-navbar");
    businessLogo.src = "/landing-imgs/fixedNavLOGO.png";
  } else {
    navbar.classList.remove("fixed-navbar");
    businessLogo.src = "/landing-imgs/fixedNavLOGO.png";
  }
});
