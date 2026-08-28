const nums = [0, 0, 1];

let left = 0;
let right = left + 1;

while (right < nums.length) {
  if (nums[left] == 0 && nums[right] != 0) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
  }

  right++;
}

console.log("The nums value is", nums);
