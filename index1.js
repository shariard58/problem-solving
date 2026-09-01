const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
if (nums.length === 0) {
  return 0;
}
let left = 1;
for (let right = 1; right < nums.length; right++) {
  if (nums[right] !== nums[left - 1]) {
    nums[left] = nums[right];
    left++;
  }
}
console.log(nums);
console.log("Unique length:", left);
