//Given a string s, find the length of the longest substring without repeating c
//haracters.
//
//
// Example 1:
//
//
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
//
//
// Example 2:
//
//
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
//
//
// Example 3:
//
//
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a
//substring.
//
//
// Example 4:
//
//
//Input: s = ""
//Output: 0
//
//
//
// Constraints:
//
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
//
// Related Topics Hash Table Two Pointers String Sliding Window
// 👍 13163 👎 683

//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  const arr: string[] = [];
  let max = 1;

  for (let i = 0; i < s.length - 1; i++) {
    const str1 = s[i];
    const hasStr1 = arr.indexOf(str1) !== -1;
    if (hasStr1) {
      continue;
    }
    arr.push(str1);

    for (let j = i + 1; j < s.length; j++) {
      const str2 = s[j];
      const hasStr2 = arr.indexOf(str2) !== -1;

      if (hasStr2) {
        break;
      }
      arr.push(str2);
      max = arr.length > max ? arr.length : max;
    }

    arr.length = 0;
  }

  return max;
}
//leetcode submit region end(Prohibit modification and deletion)
