//General purpose JavaScript file
//Author: Isaac Yocum

console.log("Hello, world!", "how's it going?");

//Displays an alert when activated
function displayAlert() {
  alert("We should come up with some kind of signal. Ok, how abou -- Warning! Warning! Warning!")
}

//Reduces the amount of typing needed for document.getElementById("")
//Type getEleId("") instead
function getEleId(string) {
  var getEle = document.getElementById(string);
  return getEle;
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

  if (getEleId("dateButton").value === "show date") {
    getEleId("dateButton").value = "hide date";
    getEleId("day").innerHTML = "Today is " + dayName + ", " + month + " " + dayNum + ", " + year;
  }
  else {
    getEleId("dateButton").value = "show date";
    getEleId("day").innerHTML = "";
  }
}

function clearEverything() {
  getEleId(str.match(/put/g)).value = "";
}
