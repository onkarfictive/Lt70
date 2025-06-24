const array = [1, 2, 3, 4, 5];

function isArraySorted(array) {
  if (!array.length) return "Invalid Array";
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}

console.log("Is Array Sorted", isArraySorted(array));
