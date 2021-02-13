//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']
//', determine if the input string is valid.
//
// An input string is valid if:
//
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//
//
//
// Example 1:
//
//
//Input: s = "()"
//Output: true
//
//
// Example 2:
//
//
//Input: s = "()[]{}"
//Output: true
//
//
// Example 3:
//
//
//Input: s = "(]"
//Output: false
//
//
// Example 4:
//
//
//Input: s = "([)]"
//Output: false
//
//
// Example 5:
//
//
//Input: s = "{[]}"
//Output: true
//
//
//
// Constraints:
//
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
//
// Related Topics String Stack
// 👍 6786 👎 276

//leetcode submit region begin(Prohibit modification and deletion)
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    // 奇数はfalsy
    return false;
  }

  let stack = s;
  let flag = true;

  do {
    // ()の捜査
    const at_0 = stack.indexOf("()");
    if (at_0 !== -1) {
      stack = stack.replace(/\(\)/g, "");
    }

    // []の捜査
    const at_1 = stack.indexOf("[]");
    if (at_1 !== -1) {
      stack = stack.replace(/\[\]/g, "");
    }

    // {}の捜査
    const at_2 = stack.indexOf("{}");
    if (at_2 !== -1) {
      stack = stack.replace(/\{\}/g, "");
    }

    if (at_0 === -1 && at_1 === -1 && at_2 === -1) {
      flag = false;
    }
  } while (flag);

  return stack === "";
}
//leetcode submit region end(Prohibit modification and deletion)
