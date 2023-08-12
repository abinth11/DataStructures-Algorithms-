const LinkedList = require("../../linked-list/implementation/linked-list");

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  getSize() {
    return this.stack.getSize();
  }
  push(val) {
    return this.stack.prepend(val);
  }
  pop() {
    return this.stack.removeFromHead();
  }
  peek() {
    return this.stack.head.val;
  }
  print() {
    return this.stack.print();
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.print());
stack.pop();
stack.pop();
console.log(stack.print());
console.log(stack.peek());
console.log(stack.getSize());
