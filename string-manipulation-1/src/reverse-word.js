/* exported reverseWord */

// create a variable named newString = '';
// create a forloop and implement the length property method
// access each index for the word parameter
// return newString

function reverseWord(word) {
  let newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString = newString + word[i];
  }
  return newString;
}
