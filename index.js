// making photography page dynamic to selection type
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const labelPhotography = document.getElementById("label-photo");
const labelMakeup = document.getElementById("label-makeup");
const labelPaintings = document.getElementById("label-painting");
const displayOptions = document.querySelectorAll(".display_option");

let currentOptionActive = 0;
prevBtn.addEventListener("click", () => {
  currentOptionActive--;
  if (currentOptionActive < 1) {
    currentOptionActive = 0;
  }
  console.log(currentOptionActive);
  updateBtns();
});

nextBtn.addEventListener("click", () => {
  currentOptionActive++;
  if (currentOptionActive > 3) {
    currentOptionActive = 3;
  }
  console.log(currentOptionActive);
  updateBtns();
});

const selectCurrent = (label) => {
  label.classList.remove("text-muted");
  label.classList.add("active");
};

const updateBtns = () => {
  if (currentOptionActive === 0) {
    prevBtn.disabled = true;
  } else if (currentOptionActive === 2) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
