//Given n non-negative integers a1, a2, ..., an , where each represents a point
//at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of
// the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x
//-axis forms a container, such that the container contains the most water.
//
// Notice that you may not slant the container.
//
//
// Example 1:
//
//
//Input: height = [1,8,6,2,5,4,8,3,7]
//Output: 49
//Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,
//3,7]. In this case, the max area of water (blue section) the container can conta
//in is 49.
//
//
// Example 2:
//
//
//Input: height = [1,1]
//Output: 1
//
//
// Example 3:
//
//
//Input: height = [4,3,2,1,4]
//Output: 16
//
//
// Example 4:
//
//
//Input: height = [1,2,1]
//Output: 2
//
//
//
// Constraints:
//
//
// n == height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104
//
// Related Topics Array Two Pointers
// 👍 8608 👎 665

//leetcode submit region begin(Prohibit modification and deletion)
function maxArea(height: number[]): number {
  let max = 0;

  for (let i = 0; i < height.length - 1; i++) {
    let height1 = height[i];

    for (let j = i + 1; j < height.length; j++) {
      let height2 = height[j];
      const minHeight = height1 <= height2 ? height1 : height2;
      const width = j - i;
      const volume = minHeight * width;

      if (max < volume) {
        max = volume;
      }
    }
  }

  return max;
}
//leetcode submit region end(Prohibit modification and deletion)
