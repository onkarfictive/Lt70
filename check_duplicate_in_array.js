const array = [1, 2, 2, 4];

//// My Solution ////
function checkDuplicateInArray(array) {
  if (!array.length) return "Invalid Array";
  const seen = new Set();
  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) return true;
    seen.add(array[i]);
  }
  return false;
}

console.log(checkDuplicateInArray(array));
