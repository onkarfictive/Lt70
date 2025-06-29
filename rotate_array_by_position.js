const array = [1, 2, 3, 4, 5, 6, 7];
const position = 3;

function reverseArrayByPosition(array , position) {
  function reverseArray(start, end) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++
      end--
    }
  }

  reverseArray(0 , array.length-1)
  reverseArray(0 , position-1)
  reverseArray(position , array.length-1)
  return array
}


console.log(reverseArrayByPosition(array , position))
// console.log("Length" , array.length-1)
