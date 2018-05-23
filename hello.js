console.log("Hello, world!", "how's it going?");

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];


let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];

function displayDate() {
  document.getElementById("day").innerHTML = dayName + " " + now.getDate() + ", " + now.getFullYear();
}
