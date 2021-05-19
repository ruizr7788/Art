const days = document.querySelectorAll(".days");
const weekday = document.querySelectorAll(".weekday");

const currentDate = new Date();
const today = currentDate.getDate();
const todayWeek = new Date();
const tomorrow = new Date(+currentDate + 24 * 60 * 60 * 1000);
const day3 = new Date(+currentDate + 2 * 24 * 60 * 60 * 1000);
const day4 = new Date(+currentDate + 3 * 24 * 60 * 60 * 1000);
const day5 = new Date(+currentDate + 4 * 24 * 60 * 60 * 1000);
const day6 = new Date(+currentDate + 5 * 24 * 60 * 60 * 1000);
const day7 = new Date(+currentDate + 6 * 24 * 60 * 60 * 1000);

const nextDays = [
  [today],
  [tomorrow.getDate()],
  [day3.getDate()],
  [day4.getDate()],
  [day5.getDate()],
  [day6.getDate()],
  [day7.getDate()],
];
days.forEach((day, i) => {
  day.textContent = nextDays[i];
});

const weekDayNum = [
  [todayWeek.getDay()],
  [tomorrow.getDay()],
  [day3.getDay()],
  [day4.getDay()],
  [day5.getDay()],
  [day6.getDay()],
  [day7.getDay()],
];
const weekDays = [
  ["Sunday"],
  ["Monday"],
  ["Tuesday"],
  ["Wednesday"],
  ["Thursday"],
  ["Friday"],
  ["Saturday"],
];

weekday.forEach((day, i) => {
  const currentDay = weekDayNum[i];
  const currentWeekDay = weekDays[Number(currentDay)];
  day.textContent = currentWeekDay;
});

// check if the weekday is not sunday and if its not add the business hours HTML: <p>10:30am - 8:00pm</p> : to the 'date card contiainer, but if Sunday add HTML: <p>Closed</p>

const dateCardEl = document.querySelectorAll(".dateCard");

weekday.forEach((day, i) => {
  const openHTML = `<p>10:30am - 8:00pm</p>`;
  const closedHTML = `<p>Closed</p>`;
  if (day.textContent !== "Sunday") {
    dateCardEl[i].insertAdjacentHTML("beforeend", openHTML);
  } else {
    dateCardEl[i].insertAdjacentHTML("beforeend", closedHTML);
  }
});

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

// Business Hours fade in
const businessHoursContainer = document.getElementById("businessHours");

window.addEventListener("scroll", checkbusinessHoursContainer);
checkbusinessHoursContainer();

function checkbusinessHoursContainer() {
  const triggerHalf = (window.innerHeight / 5) * 4;
  const businessHoursContainerTop =
    businessHoursContainer.getBoundingClientRect().top;
  if (businessHoursContainerTop < triggerHalf) {
    businessHoursContainer.style.opacity = 100;
  } else {
    businessHoursContainer.style.opacity = 0;
  }
}
