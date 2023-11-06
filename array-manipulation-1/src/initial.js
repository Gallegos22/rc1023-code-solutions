/* exported initial */
// create a variable and assign it an empty array
// set up a for loop to initialize i to 0. i < array.length , and i++
// push myArray with the push method insde the array index. myArray.push(array[i])
// return myArray

function initial(array) {
  const myArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
