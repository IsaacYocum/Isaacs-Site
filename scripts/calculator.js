//All the functionality of a Calculator
//Author: Isaac Yocum

//Global variables to keep track of the Numbers
var firstNum = '';
var secondNum = '';
var operator = '';
var answer;

//False assigns firstNum
//True assigns secondNum
var whichNum = false;

//Gets the appropriate numbers from buttons pressed
function GetNum(num) {
  var numPlaceholder = num.toString();
  if (whichNum === false) {
    if (answer !== undefined) {
      firstNum = numPlaceholder;
      console.log('firstNum is ' + firstNum)
      document.getElementById('calcOutput').value = firstNum;
      answer = undefined;
    } else {
      firstNum += numPlaceholder;
      console.log('firstNum is ' + firstNum)
      document.getElementById('calcOutput').value = firstNum;
    }
  } else {
    secondNum += numPlaceholder;
    console.log('secondNum is ' + secondNum)
    document.getElementById('calcOutput').value = secondNum;
  }
}

//Gets the mathematical operator and allows the second number to be entered
function GetOperator(op) {
  if (firstNum !== '') {
    //If firstNum
    if (whichNum === false) {
      console.log(operator)
      whichNum = true;
      //If secondNum
    } else {
      Calculate();
      whichNum = true;
    }
    operator = op;
  }
}

//Concatenates a decimal
function Decimal() {
  if (!whichNum) {
    if (!firstNum.includes('.')) {
      firstNum += '.';
      document.getElementById('calcOutput').value = firstNum;
    }
  } if (!secondNum.includes('.')) {
    secondNum += '.';
    document.getElementById('calcOutput').value = secondNum;
  }
}

//Makes the appropriate number negative
function Negative() {
  if (!whichNum) {
    if (!firstNum.includes('-')) {
      firstNum = '-' + firstNum;
      document.getElementById('calcOutput').value = firstNum;
    } else {
      firstNum = firstNum.replace('-', '');
      document.getElementById('calcOutput').value = firstNum;
    }
  } else {
    if (!secondNum.includes('-')) {
      secondNum = '-' + secondNum;
      document.getElementById('calcOutput').value = secondNum;
    } else {
      secondNum = secondNum.replace('-', '');
      document.getElementById('calcOutput').value = secondNum;
    }
  }
}

//Calculates result given two numbers and an operator
//Uses implicite cohersion
function Calculate() {
  if (operator === '*') {
    answer = firstNum * secondNum;
  } else if (operator === '/') {
    answer = firstNum / secondNum;
  } else if (operator === '+') {
    answer = +firstNum + +secondNum;
  } else if (operator === '-') {
    answer = firstNum - secondNum;
  } else if (operator === '^') {
    answer = Math.pow(firstNum, secondNum);
  }
  document.getElementById('calcOutput').value = answer;
  console.log('firstNum ' + firstNum + ' ' + operator + ' secondNum ' + secondNum +  ' = answer ' + answer);
  firstNum = answer;
  secondNum = '';
  whichNum = false;
}

//Resets the calculator and all variables to their default states
function Clear() {
  document.getElementById('calcOutput').value = '';
  firstNum = '';
  secondNum = '';
  answer = undefined;
  whichNum = false;
}
