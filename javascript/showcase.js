// selectors --------------------------------
const cards = document.querySelectorAll(".card");
const card_modal = document.querySelectorAll(".card-modal");
const main_container = document.querySelector(".main");
const btn_exit_modal = document.querySelectorAll(".card-modal-exit");

// functions ---------------------------------
let modalIsOpen = false;

// add event listener to all 'cards'
// run only if modal is open is false
cards.forEach((card, i) => {
  // when a card is selected, gets its position and target card_modal at position [i] and set display to grid to show modal
  // set cards opacity to .2 when modal is shown
  // add blur to 'main'

  card.addEventListener("click", () => {
    if (modalIsOpen === false) {
      card_modal[i].style.display = "grid";
      main_container.classList.add("blur");

      opacity02();
      modalIsOpen = true;
    }
  });
});

// add an event listener to exit button and on a click event close current modal
btn_exit_modal.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    card_modal[i].style.display = "none";
    main_container.classList.remove("blur");

    opacity1();
    modalIsOpen = false;
  });
});

function opacity02() {
  cards.forEach((card) => {
    card.style.opacity = "0.1";
  });
}

function opacity1() {
  cards.forEach((card) => {
    card.style.opacity = "1";
  });
}
