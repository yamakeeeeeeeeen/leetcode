//Given a non-empty array of integers nums, every element appears twice except f
//or one. Find that single one.
//
// Follow up: Could you implement a solution with a linear runtime complexity an
//d without using extra memory?
//
//
// Example 1:
// Input: nums = [2,2,1]
//Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
//Output: 4
// Example 3:
// Input: nums = [1]
//Output: 1
//
//
// Constraints:
//
//
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears
//only once.
//
// Related Topics Hash Table Bit Manipulation
// 👍 5746 👎 189

//leetcode submit region begin(Prohibit modification and deletion)
function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  const [number] = nums.filter(
    (value, _, array) => array.indexOf(value) === array.lastIndexOf(value)
  );
  return number;
}
//leetcode submit region end(Prohibit modification and deletion)
