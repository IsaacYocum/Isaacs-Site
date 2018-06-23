//Get some dates and calculates their difference
//Author: Isaac Yocum

//Global variables
var firstDate;
var secondDate;
const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
var millisecondsInMonth = 0;
const millisecondsInDay = 1000 * 60 * 60 * 24;
var startMonth;
var endMonth;

function GetDates() {
    var date1 = document.getElementById('firstDate').value;
    var firstDate = new Date(date1);
    console.log('First date = ' + firstDate);
    startMonth = firstDate.getMonth();

    var date2 = document.getElementById('secondDate').value;
    var secondDate = new Date(date2);
    console.log('First date = ' + secondDate);
    endMonth = secondDate.getMonth();
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
      //calculates and returns how many milliseconds are in a certain month
    } else {
        //if (date.getMonth() === 1) {
        //    millisecondsInMonth = 1000 * 60 * 60 * 24 * 28;
        //} else if (date.getMonth() === 3 || date.getMonth() === 5 || date.getMonth() === 7 || date.getMonth() === 10) {
        //    millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
        //} else {
        //    millisecondsInMonth = 1000 * 60 * 60 * 24 * 31;
        //}
        monthMilliseconds();

        date = (date.getFullYear() * millisecondsInYear) + ((date.getMonth() + 1) * millisecondsInMonth) + (date.getDate() * millisecondsInDay);

        return date;
    }
}

function calcDifference(date1, date2) {
    var answer;
    if (date1 > date2) {
        answer = date1 - date2;
    } else if (date1 === date2) {
        document.getElementById('readableAnswer').innerHTML = "These dates are the same!";
    } else {
        answer = Math.abs(date2 - date1);
    }

    //For the readable portion
    var rAnswer = answer;
    var rYears = (rAnswer / millisecondsInYear).toLocaleString();
    rAnswer = answer % millisecondsInYear;
    var rMonths = Math.floor(rAnswer / millisecondsInMonth).toLocaleString();
    rAnswer = rAnswer % millisecondsInMonth;
    var rDays = (rAnswer / millisecondsInDay).toLocaleString();

    if (rYears < 1) {
        rYears = 0;
    }

    if (rMonths < 1) {
        rMonths = 0;
    }

    if (rDays < 1) {
        rDays = 0;
    }
    document.getElementById('readableAnswer').innerHTML = "These dates are " + rYears + " years, " + rMonths + " months, " + rDays + " days apart.";

    //Raw values
    document.getElementById('Days').innerHTML = (answer / millisecondsInDay).toLocaleString();
    document.getElementById('Months').innerHTML = (answer / millisecondsInMonth).toLocaleString();
    document.getElementById('Years').innerHTML = (answer / millisecondsInYear).toLocaleString();
    document.getElementById('Hours').innerHTML = ((answer / millisecondsInDay) * 24).toLocaleString();
    document.getElementById('Minutes').innerHTML = (((answer / millisecondsInDay) * 24) * 60).toLocaleString();
    document.getElementById('Seconds').innerHTML = ((((answer / millisecondsInDay) * 24) * 60) * 60).toLocaleString();
    document.getElementById('Milliseconds').innerHTML = (((((answer / millisecondsInDay) * 24) * 60) * 60) * 1000).toLocaleString();
}

function monthMilliseconds() {
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for (var i = startMonth; i < endMonth; i++) {
        if (i === 12 && endMonth !== 12) {
            i = 0;
        }

        millisecondsInMonth += 1000 * 60 * 60 * 24 * months[i];
    }
}