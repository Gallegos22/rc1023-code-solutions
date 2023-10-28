/* exported countdown */
function countdown(number) {
  const result = [];
  while (number !== -1) {
    result.push(number);
    number--;
  }
  return result;
}
