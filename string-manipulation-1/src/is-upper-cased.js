/* exported isUpperCased */

// strictly compare the parameter word by using the uppercase method
// if word === word.toUpperCase() return true
// else return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
