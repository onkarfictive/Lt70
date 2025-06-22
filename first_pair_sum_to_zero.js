const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

////// Solution one ////////

function findPairForZero(array) {
  if (!array?.length) {
    return "Invalid Array Lenght";
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }

  return "No Pair Found";
}

///// Solution Two //////

function findPairForZeroTwo(array) {
  if (!array?.length) {
    return "Invalid Array Lenght";
  }
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(findPairForZeroTwo(array));
