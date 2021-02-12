//Given a signed 32-bit integer x, return x with its digits reversed. If reversi
//ng x causes the value to go outside the signed 32-bit integer range [-231, 231 -
// 1], then return 0.
//
// Assume the environment does not allow you to store 64-bit integers (signed or
// unsigned).
//
//
// Example 1:
// Input: x = 123
//Output: 321
// Example 2:
// Input: x = -123
//Output: -321
// Example 3:
// Input: x = 120
//Output: 21
// Example 4:
// Input: x = 0
//Output: 0
//
//
// Constraints:
//
//
// -231 <= x <= 231 - 1
//
// Related Topics Math
// 👍 4316 👎 6658
//leetcode submit region begin(Prohibit modification and deletion)

function reverse(x: number): number {
  if (x === 0) {
    return 0;
  }

  const isPlus = x > 0;
  const abs_x = isPlus ? x : -x;

  let flag = false;
  const reverse_abs_x = Number(
    abs_x
      .toString()
      .split("")
      .reverse()
      .filter((str) => {
        // 0以外
        if (str !== String(0)) {
          if (!flag) {
            flag = true;
          }
          return true;
        }

        if (flag) {
          return true;
        }
        return false;
      })
      .join("")
  );

  const output = isPlus ? reverse_abs_x : -reverse_abs_x;
  return output < (-2) ** 31 || 2 ** 31 - 1 < output ? 0 : output;
}
//leetcode submit region end(Prohibit modification and deletion)
