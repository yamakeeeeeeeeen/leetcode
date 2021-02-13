//Given an integer x, return true if x is palindrome integer.
//
// An integer is a palindrome when it reads the same backward as forward. For ex
//ample, 121 is palindrome while 123 is not.
//
//
// Example 1:
//
//
//Input: x = 121
//Output: true
//
//
// Example 2:
//
//
//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes
// 121-. Therefore it is not a palindrome.
//
//
// Example 3:
//
//
//Input: x = 10
//Output: false
//Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//
//
// Example 4:
//
//
//Input: x = -101
//Output: false
//
//
//
// Constraints:
//
//
// -231 <= x <= 231 - 1
//
//
//
//Follow up: Could you solve it without converting the integer to a string? Rela
//ted Topics Math
// 👍 3029 👎 1700

//leetcode submit region begin(Prohibit modification and deletion)
function isPalindrome(x: number): boolean {
  const isFavor = (-2) ** 31 <= x && x <= 2 ** 31 - 1;
  const isMinus = x < 0;
  if (!isFavor || isMinus) return false;

  const str_x = x.toString();
  const reverse_str_x = str_x.split("").reverse().join("");

  if (str_x === reverse_str_x) {
    return true;
  }
  // Palindrome
  return false;
}
//leetcode submit region end(Prohibit modification and deletion)
