//Given two sequences pushed and popped with distinct values, return true if and
// only if this could have been the result of a sequence of push and pop operation
//s on an initially empty stack.
//
//
//
//
// Example 1:
//
//
//Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
//Output: true
//Explanation: We might do the following sequence:
//push(1), push(2), push(3), push(4), pop() -> 4,
//push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
//
//
//
// Example 2:
//
//
//Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
//Output: false
//Explanation: 1 cannot be popped before 2.
//
//
//
//
//
// Constraints:
//
//
// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed is a permutation of popped.
// pushed and popped have distinct values.
//
// Related Topics Stack
// 👍 1560 👎 35

//leetcode submit region begin(Prohibit modification and deletion)
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  if (pushed.length <= 1) return true;

  const pushed_stack: number[] = [];
  const pushed_copy = [...pushed];
  const popped_copy = [...popped];

  const for_compare_arr: number[] = [];

  let output = true;

  while (true) {
    if (popped_copy.length === 0) {
      if (JSON.stringify(popped) !== JSON.stringify(for_compare_arr)) {
        output = false;
      }
      break;
    }

    if (pushed_stack.length === 0) {
      pushed_stack.push(pushed_copy[0]);
      pushed_copy.shift();
      continue;
    }

    if (pushed_stack[pushed_stack.length - 1] === popped_copy[0]) {
      for_compare_arr.push(pushed_stack[pushed_stack.length - 1]);
      pushed_stack.pop();
      popped_copy.shift();
      continue;
    }

    if (pushed_copy.length === 0) {
      output = false;
      break;
    }

    pushed_stack.push(pushed_copy[0]);
    pushed_copy.shift();
  }

  return output;
}
//leetcode submit region end(Prohibit modification and deletion)
