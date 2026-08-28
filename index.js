let s = "anagram";
let t = "nagaram";

function checkAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  } else {
    let obj = {};
    for (let x = 0; x < s.length; x++) {
      if (obj.hasOwnProperty(s[x])) {
        obj[s[x]] = obj[s[x]] + 1;
      } else {
        obj[s[x]] = 1;
      }
    }

    for (let x = 0; x < t.length; x++) {
      if (obj.hasOwnProperty(t[x])) {
        obj[t[x]] = obj[t[x]] - 1;
        if (obj[t[x]] == 0) {
          delete obj[t[x]];
        }
      } else {
        return false;
        break;
      }
    }

    if (Object.keys(obj).length == 0) {
      return true;
    }
  }
}

console.log(checkAnagram(s, t));

// Time Complexity: O(n)
// Space Complexity: O(1), because there are at most 26 lowercase English characters.
