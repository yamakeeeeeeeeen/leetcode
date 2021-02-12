//Given an array of integers nums and an integer target, return indices of the t
//wo numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may n
//ot use the same element twice.
//
// You can return the answer in any order.
//
//
// Example 1:
//
//
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//
//
// Example 2:
//
//
//Input: nums = [3,2,4], target = 6
//Output: [1,2]
//
//
// Example 3:
//
//
//Input: nums = [3,3], target = 6
//Output: [0,1]
//
//
//
// Constraints:
//
//
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
//
// Related Topics Array Hash Table
// 👍 19236 👎 685

//leetcode submit region begin(Prohibit modification and deletion)
function twoSum(nums: number[], target: number): number[] {
  let result: number[];

  loop_root: for (let i = 0; i < nums.length; i++) {
    const num_a = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      const num_b = nums[j];
      const sum = num_a + num_b;

      if (sum === target) {
        result = [i, j];
        break loop_root;
      }
    }
  }

  return result;
}
//leetcode submit region end(Prohibit modification and deletion)
