//Given an array nums of size n, return the majority element. 
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You
// may assume that the majority element always exists in the array. 
//
// 
// Example 1: 
// Input: nums = [3,2,3]
//Output: 3
// Example 2: 
// Input: nums = [2,2,1,1,1,2,2]
//Output: 2
// 
// 
// Constraints: 
//
// 
// n == nums.length 
// 1 <= n <= 5 * 104 
// -231 <= nums[i] <= 231 - 1 
// 
//
// 
//Follow-up: Could you solve the problem in linear time and in O(1) space? Relat
//ed Topics Array Divide and Conquer Bit Manipulation 
// 👍 4568 👎 253


//leetcode submit region begin(Prohibit modification and deletion)
function majorityElement(nums: number[]): number {
  if (nums.length <= 2) return nums[0]

  const filtered_nums = Array.from(new Set(nums))

  let max_length = 0
  let head = -1
  for (const num of filtered_nums) {
    const length = nums.filter(value => value === num).length
    if (length > max_length) {
      max_length = length
      head = num
    }
  }

  return head
};
//leetcode submit region end(Prohibit modification and deletion)
