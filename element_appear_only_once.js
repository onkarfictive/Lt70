const array = [1, 2, 2, 3, 1, 4, 2];

function elementAppearOnlyOnce(array) {
  let obj = {};
  let result = []
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    obj[value] = (obj[value] || 0) + 1;
  }
  for (let i = 0; i<array.length; i++){
    if(obj[array[i]] == 1){
      result.push(array[i])
    }
  }
  return result
}



console.log("Element appear only once" , elementAppearOnlyOnce(array))