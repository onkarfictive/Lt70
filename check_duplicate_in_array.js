const array = [1, 2, 3, 1];


//// My Solution ////
function checkDuplicateInArray(array) {
  if (!array.length) return "Invalid Array";
  let result = false;
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      result= true;
    } else {
      obj[array[i]] = true;
    }
  }

  return result
}


console.log(checkDuplicateInArray(array))