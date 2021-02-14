//Given an integer array nums, find the contiguous subarray (containing at least
// one number) which has the largest sum and return its sum.
//
//
// Example 1:
//
//
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.
//
//
// Example 2:
//
//
//Input: nums = [1]
//Output: 1
//
//
// Example 3:
//
//
//Input: nums = [0]
//Output: 0
//
//
// Example 4:
//
//
//Input: nums = [-1]
//Output: -1
//
//
// Example 5:
//
//
//Input: nums = [-100000]
//Output: -100000
//
//
//
// Constraints:
//
//
// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
//
//
//
//Follow up: If you have figured out the O(n) solution, try coding another solut
//ion using the divide and conquer approach, which is more subtle. Related Topics
//Array Divide and Conquer Dynamic Programming
// 👍 10772 👎 516

//leetcode submit region begin(Prohibit modification and deletion)
function maxSubArray(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let output: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    let sum: number = current;

    if (current > output) {
      output = current;
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum > output) {
        output = sum;
      }
    }
  }

  return output;
}
//leetcode submit region end(Prohibit modification and deletion)
