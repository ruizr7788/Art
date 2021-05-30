const btn_open = document.getElementById("open_modal");
const btn_exit = document.getElementById("modal_btn");
const modal = document.querySelector(".modal-contact");
const modalID = document.getElementById(".modal_contact");

btn_open.addEventListener("click", openClose);
btn_exit.addEventListener("click", openClose);
document.addEventListener("keydown", (event) => {
  event.key === "Escape" ? close() : -1;
});

function openClose() {
  modal.classList.toggle("hidden");
}
function close() {
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
