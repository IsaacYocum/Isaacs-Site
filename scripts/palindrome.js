//JavaScript that receives a string and reverses it. States whether it is a palindrome or not
//Author: Isaac Yocum

//Global variable to keep track the reversed word. Used in the function palindrome
var origString;
var revString;

//string parameter is reversed and sent to the palindromeOutput textbox on index.html
function reverseString(string) {
  var string = getEleId("palindromeInput").value;
  origString = string;
  var reverseString = string.split("").reverse().join("");
  revString = reverseString;
  getEleId("palindromeOutput").value = reverseString;
}

//Determines if this word is a palindrome
function palindrome(string) {
  if (origString === revString && origString !== "") {
    getEleId("palindromeChecker").innerHTML = " it is a palindrome!";
  } else if (origString === "") {
    getEleId("palindromeChecker").innerHTML = " - Enter some text first!";
  } else {
    getEleId("palindromeChecker").innerHTML = " it isn't a palindrome!";
  }
}

//Clears the palindromeInput and palindromeOutput textboxes on index.html
function clearPalindrome() {
  getEleId("palindromeInput").value = "";
  getEleId("palindromeOutput").value = "";
  getEleId("palindromeChecker").innerHTML = "";
}
