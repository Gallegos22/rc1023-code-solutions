/* exported getWords */

// Use if,else statements as well as the split  method.
// if string === '' then return []
// else return newWord = string.split(' ');
// return newWord;

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    const newWord = string.split(' ');
    return newWord;
  }
}
