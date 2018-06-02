//All the functionality of a Calculator
//Author: Isaac Yocum

//Global variables to keep track of the Numbers
var firstNum = "";
var secondNum = "";
var operator = "";
var answer;

//False assigns firstNum
//True assigns secondNum
var binary = false;

function GetNum(num) {
  var numPlaceholder = num.toString();
  if (binary === false) {
    if (answer !== undefined) {
      firstNum = numPlaceholder;
      console.log("firstNum is " + firstNum)
      document.getElementById('calcOutput').value = firstNum;
    } else {
      firstNum += numPlaceholder;
      console.log("firstNum is " + firstNum)
      document.getElementById('calcOutput').value = firstNum;
    }
  } else {
    secondNum += numPlaceholder;
    console.log("secondNum is " + secondNum)
    document.getElementById('calcOutput').value = secondNum;
  }
}

function GetOperator(op) {
  operator = op;
  if (firstNum === "") {
    alert("Enter a number first")
  } else {
    //If firstNum
    if (binary === false) {
      operator = op;
      console.log(operator)
      binary = true;
    //If secondNum
    } else {
      alert("You have already entered an operator. Press =")
      binary = false;
    }
  }
}

function Negative() {
  if (binary === false) {
    firstNum = "-" + firstNum;
    document.getElementById('calcOutput').value = firstNum;
  } else {
    secondNum = "-" + secondNum;
    document.getElementById('calcOutput').value = secondNum;
  }
}

function Calculate() {
  if (operator === "*") {
    answer = firstNum * secondNum;
  } else if (operator === "/") {
    answer = firstNum / secondNum;
  } else if (operator === "+") {
    answer = +firstNum + +secondNum;
  } else if (operator === "-") {
    answer = firstNum - secondNum;
  } else if (operator === "^") {
    answer = Math.pow(firstNum, secondNum);
  }
  document.getElementById('calcOutput').value = answer;
  console.log("firstNum " + firstNum + " " + operator + " secondNum " + secondNum +  " = answer " + answer);
  firstNum = answer;
  secondNum = "";
  binary = false;
}

//Resets the calculator
function Clear() {
  document.getElementById('calcOutput').value = "";
  firstNum = "";
  secondNum = "";
  answer = undefined;
  binary = false;
}
