
// function output(word){
//   return word.split(" ").reverse().join(" ");
function isPalindrome(word) {
  let wordSplit = word.split("")
  let outputWord = [];
  wordSplit.map((word) => {
    outputWord.unshift(word);
  });
  if( word === outputWord.join("")){
    return true;
  }
  else{
    return false;
  }
  // Write your algorithm here
 // 1. Write a function isPalindrome
 // 2. Assign a parameter 
 // 3. That function will reseive an argument and a string
 // 4. The function returns true if the string is a palindrome
}

/* 
  Add your pseudocode here
  initialize a function called isPalindrome

  iterate over the string provided
  if the sting isPalindrome;
  return true
  else
  return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("ab"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));

  // console.log("");
}

module.exports = isPalindrome;
