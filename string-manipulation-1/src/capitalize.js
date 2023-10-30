/* exported capitalize */

// create a function with a parameter
// use toUpperCase, slice, and toLowerCase methods
// return a code block that adds up the methods while specifying the index of our parameter

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
