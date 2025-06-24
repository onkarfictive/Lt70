const array = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr) {
  if (!arr.length) return "Invalid array";

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

console.log("Reversed Array Result:", reverseArrayInPlace(array));
