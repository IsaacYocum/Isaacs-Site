console.log("Hello, world!", "how's it going?");

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];


let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];

function displayDate() {
  if (document.getElementById("dateButton").value === "show date") {
    document.getElementById("dateButton").value = "hide date";
    document.getElementById("day").innerHTML = "Today is " + dayName + " " + now.getDate() + ", " + now.getFullYear();
  }
  else {
    document.getElementById("dateButton").value = "show date";
    document.getElementById("day").innerHTML = "";
  }
}
