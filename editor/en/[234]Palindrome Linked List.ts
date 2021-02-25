//Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
//
//Input: 1->2
//Output: false
//
// Example 2:
//
//
//Input: 1->2->2->1
//Output: true
//
// Follow up:
//Could you do it in O(n) time and O(1) space?
// Related Topics Linked List Two Pointers
// 👍 4698 👎 426

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;

  let tmp: ListNode | null = head;
  const tmp_arr = [];

  while (tmp) {
    tmp_arr.push(tmp.val);
    tmp = tmp.next;
  }

  let flag = true;
  const rev_tmp_arr = tmp_arr.reverse();

  for (const item of rev_tmp_arr) {
    if (head?.val !== item) {
      flag = false;
      break;
    }
    head = head?.next;
  }

  return flag;
}
//leetcode submit region end(Prohibit modification and deletion)
