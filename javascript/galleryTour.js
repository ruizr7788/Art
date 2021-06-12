const heading = document.getElementById("info_heading");
const infoCont1 = document.getElementById("info_container1");
const infoCont2 = document.getElementById("info_container2");
const quoteCont = document.getElementById("quote_container");
const galleryInfo = document.getElementById("gallery_tour_info");

// INFO TRANSITION
window.addEventListener("scroll", checkInfo);
checkInfo();
function checkInfo() {
  const triggerHalf = (window.innerHeight / 5) * 4;
  const infoContainerTop = galleryInfo.getBoundingClientRect().top;
  if (infoContainerTop < triggerHalf) {
    heading.style.transform = "translate(0)";
    infoCont1.style.transform = "translate(0)";
    infoCont2.style.transform = "translate(0)";
    quoteCont.style.transform = "translate(0)";
  } else {
    heading.style.transform = "translateY(7em)";
    infoCont1.style.transform = "translateY(15em)";
    infoCont2.style.transform = "translateY(15em)";
    quoteCont.style.transform = "translateY(15em)";
  }
}

// INRO TRANSITION
const galleryTour = document.getElementById("gallery_tour");
const galleryIntro = document.getElementById("gallery_tour_introduction");

window.addEventListener("scroll", checkIntro);
checkIntro();
function checkIntro() {
  const triggerHalf = (window.innerHeight / 5) * 4;
  const introContainerTop = galleryTour.getBoundingClientRect().top;
  if (introContainerTop < triggerHalf) {
    galleryIntro.style.transform = "translate(0)";
  } else {
    galleryIntro.style.transform = "translateY(15em)";
  }
}
