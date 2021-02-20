//You are given an array prices where prices[i] is the price of a given stock on
// the ith day.
//
// You want to maximize your profit by choosing a single day to buy one stock an
//d choosing a different day in the future to sell that stock.
//
// Return the maximum profit you can achieve from this transaction. If you canno
//t achieve any profit, return 0.
//
//
// Example 1:
//
//
//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit =
//6-1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must
// buy before you sell.
//
//
// Example 2:
//
//
//Input: prices = [7,6,4,3,1]
//Output: 0
//Explanation: In this case, no transactions are done and the max profit = 0.
//
//
//
// Constraints:
//
//
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
//
// Related Topics Array Dynamic Programming
// 👍 7640 👎 340

//leetcode submit region begin(Prohibit modification and deletion)
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    result = Math.max(result, prices[i] - min);
  }

  return result;
}
//leetcode submit region end(Prohibit modification and deletion)
