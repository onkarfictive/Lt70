const array = [1, -2, 3, -4, -1, 4, 5];

function moveAllPositiveToEnd() {
  let i = 0;
  let j = 0;
  while (i < array.length) {
    if (0 >= array[i]) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
    i++;
  }

  return array;
}

console.log("Move all postitive to end", moveAllPositiveToEnd());
