/* exported reverse */
// craete a variable with an empty aray
// crete a for loop and assign i to the array.length -1 ,
// set i >= 0 ; i--
// push the array within each array element using the push method
// myArray.push(array[i]);
// return myArray

function reverse(array) {
  const myArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    myArray.push(array[i]);
  }
  return myArray;
}
