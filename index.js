const nums = [3, 3];
const target = 6;
const results = [];

let obj = {};

for (let x = 0; x < nums.length; x++) {
  let need = target - nums[x];
  if (obj.hasOwnProperty(need)) {
    results.push(obj[need]);
    results.push(x);
  } else {
    obj[nums[x]] = x;
  }
}

console.log("The results is", results);
