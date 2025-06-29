const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximumSum() {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    currentSum = currentSum + value;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log("Maximum Sum:", maximumSum());