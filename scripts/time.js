//Get some dates and calculates their difference
//Author: Isaac Yocum

//Global variables
var firstDate;

function GetDates() {
    var date1 = document.getElementById('firstDate').value;
    var firstDate = date1;
    console.log('First date = ' + firstDate);

    var date2 = document.getElementById('secondDate').value;
    var secondDate = date2;
    console.log('First date = ' + secondDate);
    ConvertDates(date1, date2);
}

function ConvertDates(incDate1, incDate2) {
    const date1 = incDate1.getMilliseconds();
    const date2 = incDate2.getMilliseconds();

    var dateDays = date2 - date1;
    getElementById('Milliseconds').innerHTML = dateDays;
}