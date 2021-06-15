// revealing to top shortcut icon when window scroll intersects photography category

const photoCateg = document.getElementById("categories");
const shortcutEl = document.getElementById("shortcut");
console.log(shortcutEl);

const stickyShortcut = function (entries) {
  const [entry] = entries;
  //   console.log(entry);
  if (entry.isIntersecting === false)
    shortcutEl.style.transform = "translate(-49.2%, 0)";
  else shortcutEl.style.transform = "translate(-49.2%, 3em)";
};

const categoryObserver = new IntersectionObserver(stickyShortcut, {
  root: null,
  threshold: 0,
});
categoryObserver.observe(photoCateg);
