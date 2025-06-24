const array = [1, 2, 2, 3, 1, 4, 2];

function countFrequency(array) {
  if (!array.length) return "Invalid Array";
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    obj[value] = (obj[value] || 0) + 1;
  }
  return obj;
}

console.log("Check Frequency", countFrequency(array));
