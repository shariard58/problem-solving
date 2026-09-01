const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let left = 0; // Pointer for write position

  // Check each element from index 1
  for (let right = 1; right < nums.length; right++) {
    // If current element is different from left element
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right]; // Write new unique element
    }
  }

  return left + 1; // Return new length
}

console.log(removeDuplicates(nums)); // 5
console.log(nums); // [0, 1, 2, 3, 4, ...]
