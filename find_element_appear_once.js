const array = [2, 3, 5, 4, 5, 3, 4];

function elementAppearOnce(arr) {
  if (!arr.length) return "Invalid array";
  let obj = new Set();

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (obj.has(value)) {
      obj.delete(value);
    } else {
      obj.add(value);
    }
  }
  for (let value of obj) {
    return value; 

  }

  return "No unique element found";
}

console.log("Appear only once element:", elementAppearOnce(array));
