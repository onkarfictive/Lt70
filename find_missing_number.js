const array = [0, 1, 3];

function findMissingNumber() {
  let n = array.length;
  let totalSum = (n * (n + 1)) / 2;
  let currentSum = 0

  for(let i =0; i<array.length; i++){
    currentSum = currentSum + array[i]
  }
  console.log("Total" , totalSum)
  return totalSum - currentSum
}


console.log("Missing Number" , findMissingNumber())