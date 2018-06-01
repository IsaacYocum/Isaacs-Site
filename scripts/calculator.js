//All the functionality of a Calculator
//Author: Isaac Yocum

//Plan
//Step 1: Get first number
//Step 2: Get operator
//Step 3: Get second number
//Step 4: Show result, allow result to continue if wanted

//Global variables to keep track of the Numbers
var firstNum = "";
var secondNum = "";
var operator = "";

//False assigns firstNum
//True assigns secondNum
var binary = false;

function GetNum(num) {
  var numPlaceholder = num.toString();
  if (binary === false) {
    firstNum += numPlaceholder;
    console.log("firstNum is " + firstNum)
    document.getElementById('calcOutput').value = firstNum;
  } else {
    secondNum += numPlaceholder;
    console.log("secondNum is " + secondNum)
    document.getElementById('calcOutput').value = secondNum;
  }
}

function GetOperator(op) {
  operator = op;
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
  var answer;
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

  firstNum = answer;
  secondNum = "";
  binary = false;
}

//Resets the calculator
function Clear() {
  document.getElementById('calcOutput').value = "";
  firstNum = "";
  secondNum = "";
  binary = false;
}
