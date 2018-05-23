let a = [8, 17, 42, 99];

console.log(a.sort() + " -- Before function");

function numberCompare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

console.log(a.sort(numberCompare) + " -- After function");
