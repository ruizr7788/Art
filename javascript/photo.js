// photo navbar
const allTypes = {
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

const photoSectionEl = document.getElementById("photography");

const displayPhotos = function (photoObj) {
  photoObj.forEach((photo) => {
    const html = `
      <div class="photographyCard">
        <img src="${photo}" alt="" />
      </div>`;
    photoSectionEl.insertAdjacentHTML("beforeend", html);
  });
};
displayPhotos(allTypes.studio);

const clearCurrentPhotos = function () {
  photoSectionEl.innerHTML = "";
};

// displaying and clearing
const btns = document.querySelectorAll(".photoOption");

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (i === 0) {
      clearCurrentPhotos();
      displayPhotos(allTypes.studio);
    } else if (i === 1) {
      clearCurrentPhotos();
      displayPhotos(allTypes.outdoors);
    } else if (i === 2) {
      clearCurrentPhotos();
      displayPhotos(allTypes.creative);
    } else if (i === 3) {
      clearCurrentPhotos();
      displayPhotos(allTypes.userChoice);
    }
  });
});

// photography section fade-in
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
