const array = [1, 2, 3, 4, 5, 6];
const target = 7;

function findPairsToSum() {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 7) {
        result.push([array[i], array[j]]);
      }
    }
  }

  return result;
}

function optimizeVersion() {
  let result = [];
  let seen = {};

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let deficit = target - value;
    if (seen[deficit]) {
      result.push([value, deficit]);
    }
    seen[value] = true;
  }

  return result
}






function optimizeVersionWithSet(){
  let result = []
  let newSet = new Set
  
  for(let i=0; i<array.length; i++){
     let value = array[i]
     let deficit = target - value
     if(newSet.has(deficit)){
        result.push([value , deficit])
    }
    newSet.add(value)
  }
  return result
}

console.log(optimizeVersionWithSet())
