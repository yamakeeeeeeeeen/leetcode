//Design a stack that supports push, pop, top, and retrieving the minimum elemen
//t in constant time.
//
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
//
//
//
// Example 1:
//
//
//Input
//["MinStack","push","push","push","getMin","pop","top","getMin"]
//[[],[-2],[0],[-3],[],[],[],[]]
//
//Output
//[null,null,null,null,-3,null,0,-2]
//
//Explanation
//MinStack minStack = new MinStack();
//minStack.push(-2);
//minStack.push(0);
//minStack.push(-3);
//minStack.getMin(); // return -3
//minStack.pop();
//minStack.top();    // return 0
//minStack.getMin(); // return -2
//
//
//
// Constraints:
//
//
// Methods pop, top and getMin operations will always be called on non-empty sta
//cks.
//
// Related Topics Stack Design
// 👍 4612 👎 425

//leetcode submit region begin(Prohibit modification and deletion)
class MinStack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack = [x, ...this.stack];
  }

  pop(): void {
    const [_, ...newStack] = this.stack;
    this.stack = newStack !== undefined ? [...newStack] : [];
  }

  top(): number {
    return this.stack[0];
  }

  getMin(): number {
    return this.stack.reduce((a, b) => Math.min(a, b));
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
//leetcode submit region end(Prohibit modification and deletion)
