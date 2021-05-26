// painting photos
const allTypesPaintings = {
  blackWhite: [],
  abstract: [],
  creative: [],
};

// makeup photos
const allTypesMakeup = {
  festive: [
    "/makeup/makeup1.jpg",
    "/makeup/makeup2.jpg",
    "/makeup/makeup3.jpg",
    "/makeup/makeup4.jpg",
  ],
  art: [
    "/makeup/makeup5.jpg",
    "/makeup/makeup6.jpg",
    "/makeup/makeup7.jpg",
    "/makeup/makeup8.jpg",
  ],
  creative: [
    "/makeup/makeup9.jpg",
    "/makeup/makeup10.jpg",
    "/makeup/makeup11.jpg",
    "/makeup/makeup12.jpg",
  ],
};

// photography photos
const allTypesPhotos = {
  studio: [
    "/photography/ameer-basheer-_FRKHdiPXYs-unsplash.jpg",
    "/photography/angel-gonzlez-rSODThq-thM-unsplash.jpg",
    "/photography/art-hauntington-0wRXAXqIp58-unsplash.jpg",
    "/photography/jessica-felicio-_cvwXhGqG-o-unsplash.jpg",
    "/photography/michael-afonso-3lbxyaAoXbU-unsplash.jpg",
    "/photography/noah-buscher-11lDEHFy_hA-unsplash.jpg",
    "/photography/pooja-chaudhary-bqnbKxiIGZI-unsplash.jpg",
    "/photography/portrait.jpg",
  ],
  outdoors: [
    "/photography/christopher-campbell-nEWGCi7gB8U-unsplash.jpg",
    "/photography/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg",
    "/photography/nathan-mcdine-AZMiGR4fInQ-unsplash.jpg",
    "/photography/seth-doyle-R5tHd-aYmPs-unsplash.jpg",
    "/photography/waterfall.jpg",
    "/photography/sitting.jpg",
    "/photography/shore.jpg",
    "/photography/lakeside.jpg",
  ],
  creative: [
    "/photography/yuvraj-singh-QQTk22IPBGk-unsplash.jpg",
    "/photography/noah-buscher-11lDEHFy_hA-unsplash.jpg",
    "/photography/tennis.jpg",
    "/photography/selfie.jpg",
    "/photography/mirror.jpg",
    "/photography/divided.jpg",
    "/photography/bricks.jpg",
  ],
};

// making photography page dynamic to selection type
// selectors
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const labelPhotography = document.getElementById("photography_introduction");
const labelMakeup = document.getElementById("makeup_introduction");
const labelPaintings = document.getElementById("paintings_introduction");
const displayOptions = document.querySelectorAll(".display_option");
const displayContainer = document.getElementById("displaySwitch");
// add our html to this container
let photoSectionEl = document.getElementById("photography");

let currentOptionActive = 0;
let currentDisplay = "photography";

updateBtns();
updateActiveOption(currentOptionActive);
displaySwitch(currentOptionActive);
updatePhotos(currentDisplay);

prevBtn.addEventListener("click", () => {
  currentOptionActive--;
  if (currentOptionActive < 0) {
    currentOptionActive = 0;
  }

  updateBtns();
  updateActiveOption(currentOptionActive);
  displaySwitch(currentOptionActive);
  updatePhotos(currentDisplay);
});

nextBtn.addEventListener("click", () => {
  currentOptionActive++;
  if (currentOptionActive > 2) {
    currentOptionActive = 2;
  }
  updateBtns();
  updateActiveOption(currentOptionActive);
  displaySwitch(currentOptionActive);
  updatePhotos(currentDisplay);
});

function updateBtns() {
  if (currentOptionActive === 0) {
    prevBtn.disabled = true;
  } else if (currentOptionActive === 2) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

function updateActiveOption(current) {
  current === 0
    ? labelPhotography.classList.add("active")
    : labelPhotography.classList.remove("active");
  current === 1
    ? labelMakeup.classList.add("active")
    : labelMakeup.classList.remove("active");
  current === 2
    ? labelPaintings.classList.add("active")
    : labelPaintings.classList.remove("active");
}

function displaySwitch(current) {
  if (current === 0) {
    currentDisplay = "photography";
    const htmlPhoto = `
    <div id="photography_top_bar">
      <div id="photo-navbar">
        <ul>
          <li class="photoOption">Studio</li>
          <li class="photoOption">Outdoors</li>
          <li class="photoOption">Creative</li>
        </ul>
      </div>
    </div>
    <div id="photography"></div>
    `;
    displayContainer.innerHTML = "";
    displayContainer.insertAdjacentHTML("afterbegin", htmlPhoto);
  }
  if (current === 1) {
    currentDisplay = "makeup";
    const htmlMakeup = `
    <div id="photography_top_bar">
      <div id="photo-navbar">
        <ul>
          <li class="photoOption">Festive</li>
          <li class="photoOption">Art</li>
          <li class="photoOption">Creative</li>
        </ul>
      </div>
    </div>
    <div id="photography"></div>
    `;
    displayContainer.innerHTML = "";
    displayContainer.insertAdjacentHTML("afterbegin", htmlMakeup);
  }

  if (current === 2) {
    currentDisplay = "paintings";
    const htmlPaintings = `
    <div id="photography_top_bar">
      <div id="photo-navbar">
        <ul>
          <li class="photoOption">Black & White</li>
          <li class="photoOption">Abstract</li>
          <li class="photoOption">Creative</li>
        </ul>
      </div>
    </div>
    <div id="photography"></div>
    `;
    displayContainer.innerHTML = "";
    displayContainer.insertAdjacentHTML("afterbegin", htmlPaintings);
  }
}

updatePhotos(currentDisplay);

function updatePhotos(current = "photography") {
  photoSectionEl = document.getElementById("photography");
  if (current === "photography") {
    clearCurrentPhotos();
    displayPhotos(allTypesPhotos.studio);
  }
  if (current === "makeup") {
    clearCurrentPhotos();
    displayPhotos(allTypesMakeup.festive);
  }
}

// display photo function
function displayPhotos(photoObj) {
  photoObj.forEach((photo) => {
    const html = `
      <div class="photographyCard">
        <img src="${photo}" alt="..." />
      </div>`;
    photoSectionEl.insertAdjacentHTML("beforeend", html);
  });
}

function clearCurrentPhotos() {
  photoSectionEl.innerHTML = "";
}

// displaying and clearing
// const btns = document.querySelectorAll(".photoOption");

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     if (i === 0) {
//       clearCurrentPhotos();
//       displayPhotos(allTypes.studio);
//     } else if (i === 1) {
//       clearCurrentPhotos();
//       displayPhotos(allTypes.outdoors);
//     } else if (i === 2) {
//       clearCurrentPhotos();
//       displayPhotos(allTypes.creative);
//     }
//   });
// });

// photography section fade-in -----------------------------------
const photoContainer = document.getElementById("photography_container");

window.addEventListener("scroll", checkPhotoContainer);
checkPhotoContainer();

function checkPhotoContainer() {
  const triggerHalf = (window.innerHeight / 5) * 4;
  const photoContainerTop = photoContainer.getBoundingClientRect().top;
  if (photoContainerTop < triggerHalf) {
    photoContainer.style.opacity = 100;
  } else {
    photoContainer.style.opacity = 0;
  }
}
