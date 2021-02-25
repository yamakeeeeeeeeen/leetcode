//Invert a binary tree.
//
// Example:
//
// Input:
//
//
//     4
//   /   \
//  2     7
// / \   / \
//1   3 6   9
//
// Output:
//
//
//     4
//   /   \
//  7     2
// / \   / \
//9   6 3   1
//
// Trivia:
//This problem was inspired by this original tweet by Max Howell:
//
// Google: 90% of our engineers use the software you wrote (Homebrew), but you c
//an’t invert a binary tree on a whiteboard so f*** off.
// Related Topics Tree
// 👍 4778 👎 71

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  if (root) {
    const tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
  }

  return root;
}
//leetcode submit region end(Prohibit modification and deletion)
