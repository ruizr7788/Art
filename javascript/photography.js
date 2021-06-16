// painting photos
const allTypesPaintings = {
  blackWhite: [
    "/paintingsPG/paintings1.jpg",
    "/paintingsPG/paintings2.jpg",
    "/paintingsPG/paintings3.jpg",
    "/paintingsPG/paintings4.jpg",
    "/paintingsPG/paintings13.jpg",
    "/paintingsPG/paintings14.jpg",
    "/paintingsPG/paintings15.jpg",
    "/paintingsPG/paintings16.jpg",
  ],
  abstract: [
    "/paintingsPG/paintings5.jpg",
    "/paintingsPG/paintings6.jpg",
    "/paintingsPG/paintings7.jpg",
    "/paintingsPG/paintings8.jpg",
    "/paintingsPG/paintings17.jpg",
    "/paintingsPG/paintings18.jpg",
    "/paintingsPG/paintings19.jpg",
    "/paintingsPG/paintings20.jpg",
  ],
  creative: [
    "/paintingsPG/paintings9.jpg",
    "/paintingsPG/paintings10.jpg",
    "/paintingsPG/paintings11.jpg",
    "/paintingsPG/paintings12.jpg",
    "/paintingsPG/paintings21.jpg",
    "/paintingsPG/paintings22.jpg",
    "/paintingsPG/paintings23.jpg",
    "/paintingsPG/paintings24.jpg",
  ],
};

// makeup photos
const allTypesMakeup = {
  festive: [
    "/makeup/makeup1.jpg",
    "/makeup/makeup2.jpg",
    "/makeup/makeup3.jpg",
    "/makeup/makeup4.jpg",
    "/makeup/makeup13.jpg",
    "/makeup/makeup14.jpg",
    "/makeup/makeup15.jpg",
    "/makeup/makeup16.jpg",
  ],
  characterCreation: [
    "/makeup/makeup5.jpg",
    "/makeup/makeup6.jpg",
    "/makeup/makeup7.jpg",
    "/makeup/makeup8.jpg",
    "/makeup/makeup17.jpg",
    "/makeup/makeup18.jpg",
    "/makeup/makeup19.jpg",
    "/makeup/makeup20.jpg",
  ],
  creative: [
    "/makeup/makeup9.jpg",
    "/makeup/makeup10.jpg",
    "/makeup/makeup11.jpg",
    "/makeup/makeup12.jpg",
    "/makeup/makeup21.jpg",
    "/makeup/makeup22.jpg",
    "/makeup/makeup23.jpg",
    "/makeup/makeup24.jpg",
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
          <li class="photoOption">Character Creation</li>
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
    let btns = document.querySelectorAll(".photoOption");
    clearCurrentPhotos();
    displayPhotos(allTypesPhotos.studio);
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (i === 0) {
          clearCurrentPhotos();
          displayPhotos(allTypesPhotos.studio);
        } else if (i === 1) {
          clearCurrentPhotos();
          displayPhotos(allTypesPhotos.outdoors);
        } else if (i === 2) {
          clearCurrentPhotos();
          displayPhotos(allTypesPhotos.creative);
        }
      });
    });
  }
  if (current === "makeup") {
    let btns = document.querySelectorAll(".photoOption");
    clearCurrentPhotos();
    displayPhotos(allTypesMakeup.festive);
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (i === 0) {
          clearCurrentPhotos();
          displayPhotos(allTypesMakeup.festive);
        } else if (i === 1) {
          clearCurrentPhotos();
          displayPhotos(allTypesMakeup.characterCreation);
        } else if (i === 2) {
          clearCurrentPhotos();
          displayPhotos(allTypesMakeup.creative);
        }
      });
    });
  }
  if (current === "paintings") {
    let btns = document.querySelectorAll(".photoOption");
    clearCurrentPhotos();
    displayPhotos(allTypesPaintings.blackWhite);
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (i === 0) {
          clearCurrentPhotos();
          displayPhotos(allTypesPaintings.blackWhite);
        } else if (i === 1) {
          clearCurrentPhotos();
          displayPhotos(allTypesPaintings.abstract);
        } else if (i === 2) {
          clearCurrentPhotos();
          displayPhotos(allTypesPaintings.creative);
        }
      });
    });
  }
}

// display photo function
function displayPhotos(photoObj) {
  photoObj.forEach((photo) => {
    const html = `
      <div class="photographyCard">
        <img class="photo" src="${photo}" alt="..." />
      </div>`;
    photoSectionEl.insertAdjacentHTML("beforeend", html);
  });
}

function clearCurrentPhotos() {
  photoSectionEl.innerHTML = "";
}
