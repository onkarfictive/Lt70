const array = [3, 7, 2, 9, 1];

function findMaxNumber(array) {
  if (!array.length) return "Invalid Array";
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result) {
      result = array[i];
    }
  }
  return result
}

console.log("Largest Number In Array" , findMaxNumber(array))