const array = [5, 5, 5,4,4];

function findSecondLargest(array) {
  if (!array.length || array.length < 2) return "Invalid Length";

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest === -Infinity
    ? "No second largest found"
    : secondLargest;
}

console.log("Second Largest:", findSecondLargest(array));
