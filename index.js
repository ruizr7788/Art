const imgCards = document.querySelectorAll(".landing_img_card");

window.addEventListener("scroll", checkCards);

checkCards();
function checkCards() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  imgCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}
