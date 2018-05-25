//General purpose JavaScript file
//Author: Isaac Yocum

console.log("Hello, world!", "how's it going?");

//Displays an alert when activated
function displayAlert() {
  alert("Hel... Alert! Alert! Alert!")
}

//Controls the functionality for the show/hide date button on index.html
function displayDate() {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];

  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November",
                  "December"]

  let now = new Date();
  let dayNum = now.getDate();
  let dayName = daysOfTheWeek[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  if (document.getElementById("dateButton").value === "show date") {
    document.getElementById("dateButton").value = "hide date";
    document.getElementById("day").innerHTML = "Today is " + dayName + ", " + month + " " + dayNum + ", " + year;
  }
  else {
    document.getElementById("dateButton").value = "show date";
    document.getElementById("day").innerHTML = "";
  }
}
