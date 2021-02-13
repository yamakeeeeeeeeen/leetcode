//Write a function to find the longest common prefix string amongst an array of
//strings.
//
// If there is no common prefix, return an empty string "".
//
//
// Example 1:
//
//
//Input: strs = ["flower","flow","flight"]
//Output: "fl"
//
//
// Example 2:
//
//
//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
//
//
//
// Constraints:
//
//
// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.
//
// Related Topics String
// 👍 3686 👎 2123

//leetcode submit region begin(Prohibit modification and deletion)
function longestCommonPrefix(strs: string[]): string {
  let output = "";
  if (strs.length === 1) {
    return strs[0];
  }

  const first_word = strs[0];
  if (typeof first_word !== "string") {
    return output;
  }

  for (let i = 0; i < first_word.length; i++) {
    let flag = true;
    if (!flag) {
      break;
    }
    const pattern = first_word.slice(0, i + 1);

    for (let j = 1; j < strs.length; j++) {
      const isLast = j === strs.length - 1;
      if (strs[j].startsWith(pattern)) {
        if (isLast) {
          output = pattern;
        }
      } else {
        flag = false;
        break;
      }
    }
  }

  return output;
}
//leetcode submit region end(Prohibit modification and deletion)
