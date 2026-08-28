const nums = [2, 7, 11, 15];
const target = 9;

const obj = {};
const result = [];

for (let x = 0; x < nums.length; x++) {
  let need = target - nums[x];
  if (obj.hasOwnProperty(need)) {
    result.push(obj[need]);
    result.push(x);
  } else {
    obj[nums[x]] = x;
  }
}

console.log("the num value is", result);
