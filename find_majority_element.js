const array = [2, 2, 1, 1, 1, 2, 2];

function findMajorityElement() {
  const half = array.length / 2;
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    obj[value] = (obj[value] || 0) + 1;
    if(obj[value] > half) return value
  }

}

console.log("Find Majority Element", findMajorityElement());
