/* exported getStudentNames */
function getStudentNames(students) {
  const myArray = [];
  for (let i = 0; i < students.length; i++) {
    myArray.push(students[i].name);
  }
  return myArray;
}
