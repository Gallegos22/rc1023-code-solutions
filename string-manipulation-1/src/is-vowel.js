/* exported isVowel */

// create if code blocks to return true or false statements
// if char is loosely equal to 'a' or 'e' or 'i' or 'o' or 'u' vowel then return true
// else return false

function isVowel(character) {
  const lowerCaseChar = character.toLowerCase();
  if (
    lowerCaseChar === 'a' ||
    lowerCaseChar === 'e' ||
    lowerCaseChar === 'i' ||
    lowerCaseChar === 'o' ||
    lowerCaseChar === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
