const array = [0, 1, 0, 3, 12];

function moveZeroToEnd() {
  let i = 0;
  let j = 0;
  while (i < array.length) {
    if (array[i] != 0) {
       [array[i] , array[j]] = [array[j] , array[i]]
      i++;
      j++;
    } else {
      i++;
    }
  }
  return array
}


console.log("Move to Zero" , moveZeroToEnd())
