//JavaScript that receives a string and reverses it. States whether it is a palindrome or not
//Author: Isaac Yocum

//Global variable to keep track the reversed word. Used in the function palindrome
var origString;
var revString;

//string parameter is reversed and sent to the palindromeOutput textbox on index.html
function reverseString(string) {
  var string = document.getElementById("palindromeInput").value;
  origString = string;
  var reverseString = string.split("").reverse().join("");
  revString = reverseString;
  document.getElementById("palindromeOutput").value = reverseString;
}

//Determines if this word is a palindrome
function palindrome(string) {
  if (origString === revString && origString !== "") {
    document.getElementById("palindromeChecker").innerHTML = "It is!";
  } else if (origString === "") {
    document.getElementById("palindromeChecker").innerHTML = "Enter some text first!";
  } else {
    document.getElementById("palindromeChecker").innerHTML = "Nope!";
  }
}

//Clears the palindromeInput and palindromeOutput textboxes on index.html
function clearPalindrome() {
  document.getElementById("palindromeInput").value = "";
  document.getElementById("palindromeOutput").value = "";
  document.getElementById("palindromeChecker").innerHTML = "";
}
