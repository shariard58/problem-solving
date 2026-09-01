console.log("the is shariar");

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

function interSectionOfArrays(nums1, nums2) {
  const obj = {};
  const results = [];
  for (let x = 0; x < nums1.length; x++) {
    if (!obj.hasOwnProperty(nums1[x])) {
      obj[nums1[x]] = 1;
    }
  }

  for (let x = 0; x < nums2.length; x++) {
    if (obj.hasOwnProperty(nums2[x])) {
      results.push(nums2[x]);
    }
  }

  return [...new Set(results)];
}

console.log(interSectionOfArrays(nums1, nums2));
