const days = document.querySelectorAll(".days");

const currentDate = new Date();
const today = currentDate.getDate();
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
