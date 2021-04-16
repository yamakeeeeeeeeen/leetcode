//Given the root of a binary tree, return the length of the diameter of the tree
//.
//
// The diameter of a binary tree is the length of the longest path between any t
//wo nodes in a tree. This path may or may not pass through the root.
//
// The length of a path between two nodes is represented by the number of edges
//between them.
//
//
// Example 1:
//
//
//Input: root = [1,2,3,4,5]
//Output: 3
//Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].
//
//
// Example 2:
//
//
//Input: root = [1,2]
//Output: 1
//
//
//
// Constraints:
//
//
// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100
//
// Related Topics Tree
// 👍 4554 👎 284

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  const maxDepth = (root: TreeNode | null): number => {
    if (root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };

  maxDepth(root);
  return max;
}
//leetcode submit region end(Prohibit modification and deletion)
