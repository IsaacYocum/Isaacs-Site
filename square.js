//traditional notation
//takes up more space
function square(x) {
  return x*x;
}

//Fat arrow notation
let squared = (x) => (x*x);

console.log(square(2));
console.log(squared(4));

//Takes input, converts to float, and outputs it's square (x^2)
function square(x) {
  var x = document.getElementById('squareInput').value;

  //Checks if x can be parsed into a float. If true -- calculate, if false -- display hint, if empty -- do nothing
  if (parseFloat(x)) {
    var answer = Math.pow(parseFloat(x), 2);
    document.getElementById('squareOutput').value = answer;
  } else if (document.getElementById('squareInput').value === "" && document.getElementById('squareOutput').value === "") {
    break;
  } else {
    document.getElementById('squareOutput').value = "Numbers only";
  }
}

//Clears contents in the squareInput and squareOutput textboxes
function clearSquare() {
  document.getElementById('squareInput').value = "";
  document.getElementById('squareOutput').value = "";
}
