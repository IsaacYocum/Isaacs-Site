//traditional notation
//takes up more space
function square(x) {
  return x*x;
}

//Fat arrow notation
let squared = (x) => (x*x);

console.log(square(2));
console.log(squared(4));

function square(x) {
  var x = document.getElementById('squareInput').value;

  //Checks if x can be parsed into a float. If true -- calculate, false -- display hint 
  if (parseFloat(x)) {
    var answer = Math.pow(parseFloat(x), 2);
    document.getElementById('squareOutput').value = answer;
  } else {
    document.getElementById('squareOutput').value = "Numbers only";
  }
}
