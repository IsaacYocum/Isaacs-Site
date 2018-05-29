//JavaScript that controls the exponent functionality in index.html
//Author: Isaac Yocum

//Addition
function addition(x, y) {
  var x = getEleId('addInputX').value;
  var y = getEleId('addInputY').value;

  if (parseFloat(x) && parseFloat(y)) {
    var answer = parseFloat(x) + parseFloat(y);
    getEleId('addOutput').value = answer;
  } else if (x === "" || y === "") {
    getEleId('addOutput').value = "Enter both numbers first!"
  } else {
    getEleId('addOutput').value = "Numbers only";
  }
}

function clearAdd() {
  getEleId('addInputX').value = "";
  getEleId('addInputY').value = "";
  getEleId('addOutput').value = "";
}

//Addition
function subtraction(x, y) {
  var x = getEleId('subInputX').value;
  var y = getEleId('subInputY').value;

  if (parseFloat(x) && parseFloat(y)) {
    var answer = parseFloat(x) - parseFloat(y);
    getEleId('subOutput').value = answer;
  } else if (x === "" || y === "") {
    getEleId('subOutput').value = "Enter both numbers first!"
  } else {
    getEleId('subOutput').value = "Numbers only";
  }
}

function clearSub() {
  getEleId('subInputX').value = "";
  getEleId('subInputY').value = "";
  getEleId('subOutput').value = "";
}

function multiplication(x, y) {
  var x = getEleId('mulInputX').value;
  var y = getEleId('mulInputY').value;

  if (parseFloat(x) && parseFloat(y)) {
    var answer = parseFloat(x) * parseFloat(y);
    getEleId('mulOutput').value = answer;
  } else if (x === "" || y === "") {
    getEleId('mulOutput').value = "Enter both numbers first!"
  } else {
    getEleId('mulOutput').value = "Numbers only";
  }
}

function clearMul() {
  getEleId('mulInputX').value = "";
  getEleId('mulInputY').value = "";
  getEleId('mulOutput').value = "";
}

//Division
function division(x, y) {
  var x = getEleId('divInputX').value;
  var y = getEleId('divInputY').value;

  if (parseFloat(x) && parseFloat(y)) {
    var answer = parseFloat(x) / parseFloat(y);
    getEleId('divOutput').value = answer;
  } else if (x === "" || y === "") {
    getEleId('divOutput').value = "Enter both numbers first!"
  } else {
    getEleId('divOutput').value = "Numbers only";
  }
}

function clearDiv() {
  getEleId('divInputX').value = "";
  getEleId('divInputY').value = "";
  getEleId('divOutput').value = "";
}

//Exponents
function exponent(x, y) {
  var x = getEleId('expInputX').value;
  var y = getEleId('expInputY').value;

  if (parseFloat(x) && parseFloat(y)) {
    var answer = Math.pow(parseFloat(x), parseFloat(y));
    getEleId('expOutput').value = answer;
  } else if (x === "" || y === "") {
    getEleId('expOutput').value = "Enter both numbers first!"
  } else {
    getEleId('expOutput').value = "Numbers only";
  }
}

function clearExp() {
  getEleId('expInputX').value = "";
  getEleId('expInputY').value = "";
  getEleId('expOutput').value = "";
}
