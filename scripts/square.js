//JavaScript that controls the exponent functionality in index.html
//Author: Isaac Yocum

//Takes input, converts to float, and outputs it's square (x^2)
function square(x) {
  var x = getEleId('squareInput').value;

  //Checks if x can be parsed into a float. If true -- calculate, if false -- display hint, if textboxes are empty -- do nothing
  if (parseFloat(x)) {
    var answer = Math.pow(parseFloat(x), 2);
    getEleId('squareOutput').value = answer;
  } else if (getEleId('squareInput').value === "" && getEleId('squareOutput').value === "") {
    clearSquare();
  } else {
    getEleId('squareOutput').value = "Numbers only";
  }
}

//Clears contents in the squareInput and squareOutput textboxes
function clearSquare() {
  getEleId('squareInput').value = "";
  getEleId('squareOutput').value = "";
}
