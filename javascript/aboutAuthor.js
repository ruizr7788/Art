const tabs = document.querySelectorAll(".tab");
const info = document.querySelectorAll(".info");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    hideAll();
    tab.classList.add("active");
    info[i].classList.remove("hidden");
  });
});

function hideAll() {
  tabs.forEach((tab) => tab.classList.remove("active"));
  info.forEach((info) => info.classList.add("hidden"));
}
