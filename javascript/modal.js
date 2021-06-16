const btn_open = document.getElementById("open_modal");
const btn_exit = document.getElementById("modal_btn");
const modal = document.querySelector(".modal-contact");
const modalID = document.getElementById(".modal_contact");
const overlay = document.querySelector(".overlay");

modal.classList.add("hidden");

btn_open.addEventListener("click", open);
btn_exit.addEventListener("click", close);
document.addEventListener("keydown", (event) => {
  event.key === "Escape" ? close() : -1;
});

function open() {
  modal.style.opacity = "1";
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}
function close() {
  modal.style.opacity = "0";
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

// select the .price and format it according to the users location
const modal_price = document.querySelectorAll(".price");
const userLocale = navigator.language;

modal_price.forEach((price) => {
  const currentPrice = price.textContent;
  price.textContent = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: "MXN",
  }).format(currentPrice);
});
