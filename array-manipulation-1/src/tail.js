/* exported tail */

// create a new variable myArray and assign it an empty array
// start a for loop and initialize i to 1 since we want to remove the frist element of each array
// set i less than the length on the array and increment i++
// push our new values into each array with the push method
// return myArray

function tail(array) {
  const myArray = [];
  for (let i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
