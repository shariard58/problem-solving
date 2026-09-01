let nums = [3, 1, 2, 10, 1];
let sumtillNow = 0;

for (let x = 0; x < nums.length; x++) {
  nums[x] = nums[x] + sumtillNow;
  sumtillNow = nums[x];
}

console.log(nums);

// COMPLEXITY ANALYSIS 📊

// Your Solution:

// ⏱️ Time Complexity: O(n) ✅
// Single pass through array
// Each element visited once
// 💾 Space Complexity: O(1) ✅
// Only constant variables (sumtillNow, x)
// Modified array in-place
// No extra space used!

// OPTIMAL! ✅
