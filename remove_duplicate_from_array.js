const array = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicate(array) {
  if (!array.length) return "Invalid Length";
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(array[i]);
    }
  }

  return result;
}

function removeDuplicateBySet(array) {
  if (!array.length) return "Invalid Length";
  let obj = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!obj.has(array[i])) {
      obj.add(array[i]);
    }
  }
  return Array.from(obj);
}

function removeDublicateByObject() {
  if (!array.length) return "Invalid Length";
  let obj = {};
  let result=  [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (!obj[value]) {
      obj[value] = true;
      result.push(value)
    }
  }

  return result
}

console.log("Updated Array is", removeDublicateByObject(array));
