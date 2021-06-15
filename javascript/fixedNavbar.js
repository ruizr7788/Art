// fixed navbar
const navbar = document.getElementById("topbar");
const businessLogo = document.getElementById("business_logo");

// Intersection Observer for fixed navbar
const lanPage = document.getElementById("landing_page");
const navHeight = document
  .getElementById("topbar")
  .getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting === false) navbar.classList.add("fixed-navbar");
  else navbar.classList.remove("fixed-navbar");
};

const lanPageObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
lanPageObserver.observe(lanPage);
