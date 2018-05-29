let a = [8, 17, 42, 99, 3, 100, 50];

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

a.sort(function numSort(a, b) {
  return a - b;
});

console.log(a.sort(numSort));
