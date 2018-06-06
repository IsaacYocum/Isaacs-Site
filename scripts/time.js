//Get some dates and calculates their difference
//Author: Isaac Yocum

//Global variables
var firstDate;
var secondDate;
const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
var millisecondsInMonth;
const millisecondsInDay = 1000 * 60 * 60 * 24;

function GetDates() {
    var date1 = document.getElementById('firstDate').value;
    var firstDate = new Date(date1);
    console.log('First date = ' + firstDate);

    var date2 = document.getElementById('secondDate').value;
    var secondDate = new Date(date2);
    console.log('First date = ' + secondDate);
    firstDate = ConvertDates(firstDate);
    secondDate = ConvertDates(secondDate);
    calcDifference(firstDate, secondDate);
}

//Inserts today's date into the second date input
function ConvertDates(date) {
    //Takes the onload arguement from time.html to assign the "today" to the secondDate field
    if (date === 'today') {
        let now = new Date();
        let dayNum = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();

        if (dayNum < 10) {
          dayNum = '0' + dayNum;
        }

        if (month < 10) {
          month = '0' + (month + 1);
        }

        let today = year + '-' + month + '-' + dayNum;
        document.getElementById('secondDate').value = today;
        console.log(today);
      //calculates and returns how many milliseconds are in a certain date
    } else {
        if (date.getMonth() === 1) {
            millisecondsInMonth = 1000 * 60 * 60 * 24 * 28;
        } else if (date.getMonth() === 3 || date.getMonth() === 5 || date.getMonth() === 7 || date.getMonth() === 10) {
            millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
        } else {
            millisecondsInMonth = 1000 * 60 * 60 * 24 * 31;
        }

        date = (date.getFullYear() * millisecondsInYear) + ((date.getMonth() + 1) * millisecondsInMonth) + (date.getDate() * millisecondsInDay);

        return date;
    }
}

function calcDifference(date1, date2) {
    var answer;
    if (date1 > date2) {
        answer = date1 - date2;
    } else if (date1 === date2) {
        "These dates are the same!"
    } else {
        answer = Math.abs(date2 - date1);
    }

    document.getElementById('Days').innerHTML = (answer / millisecondsInDay).toLocaleString();
    document.getElementById('Months').innerHTML = (answer / millisecondsInMonth).toLocaleString();
    document.getElementById('Years').innerHTML = (answer / millisecondsInYear).toLocaleString();
    document.getElementById('Hours').innerHTML = ((answer / millisecondsInDay) * 24).toLocaleString();
    document.getElementById('Minutes').innerHTML = (((answer / millisecondsInDay) * 24) * 60).toLocaleString();
    document.getElementById('Seconds').innerHTML = ((((answer / millisecondsInDay) * 24) * 60) * 60).toLocaleString();
    document.getElementById('Milliseconds').innerHTML = (((((answer / millisecondsInDay) * 24) * 60) * 60) * 1000).toLocaleString();
}