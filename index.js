let s = "leetcode";
let obj = {};

// expected output 0, the index of the l

function findUniqueCharacter() {
  for (let x = 0; x < s.length; x++) {
    if (obj.hasOwnProperty(s[x])) {
      obj[s[x]] = obj[s[x]] + 1;
    } else {
      obj[s[x]] = 1;
    }
  }

  console.log("the object is", obj);

  for (let x = 0; x < s.length; x++) {
    if (obj[s[x]] == 1) {
      return x;
    }
  }

  return -1;
}

console.log(findUniqueCharacter());
