const nums = [1, 7, 3, 6, 5, 6];
// Output: 3

function findPivot(nums) {
  const arraySum = nums.reduce((acc, cuu) => acc + cuu, 0);
  let leftSum = 0;
  let rightSum = 0;
  let pivotIndex = -1;

  for (let x = 0; x < nums.length; x++) {
    rightSum = arraySum - (leftSum + nums[x]);
    if (leftSum == rightSum) {
      pivotIndex = x;
      break;
    }

    leftSum = leftSum + nums[x];
  }

  return pivotIndex;
}

console.log(findPivot(nums));
