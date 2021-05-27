const btn_open = document.getElementById("open_modal");
const btn_exit = document.getElementById("modal_btn");
const modal = document.querySelector(".modal-contact");

btn_open.addEventListener("click", openClose);
btn_exit.addEventListener("click", openClose);
document.addEventListener("keydown", (event) => {
  event.key === "Escape" ? openClose() : -1;
});
function openClose() {
  modal.classList.toggle("hidden");
}
