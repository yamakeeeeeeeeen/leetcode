//Given a binary tree, check whether it is a mirror of itself (ie, symmetric aro
//und its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//
//    1
//   / \
//  2   2
// / \ / \
//3  4 4  3
//
//
//
//
// But the following [1,2,2,null,3,null,3] is not:
//
//
//    1
//   / \
//  2   2
//   \   \
//   3    3
//
//
//
//
// Follow up: Solve it both recursively and iteratively.
// Related Topics Tree Depth-first Search Breadth-first Search
// 👍 5614 👎 151

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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const isSymmetricHelper = (
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean => {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;

    return (
      isSymmetricHelper(left.left, right.right) &&
      isSymmetricHelper(left.right, right.left)
    );
  };

  return isSymmetricHelper(root.left, root.right);
}
//leetcode submit region end(Prohibit modification and deletion)
