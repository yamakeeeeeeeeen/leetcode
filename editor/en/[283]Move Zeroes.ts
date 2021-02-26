//Given an array nums, write a function to move all 0's to the end of it while m
//aintaining the relative order of the non-zero elements.
//
// Example:
//
//
//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]
//
// Note:
//
//
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// Related Topics Array Two Pointers
// 👍 5101 👎 158

//leetcode submit region begin(Prohibit modification and deletion)
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      len--;
    }
  }
}
//leetcode submit region end(Prohibit modification and deletion)
