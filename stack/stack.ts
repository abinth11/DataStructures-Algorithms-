class Stack {
  stack: number[];
  constructor() {
    this.stack = [];
  }
  push(value: number) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    return this.stack.toString();
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(50)
stack.push(60)
stack.push(80)
console.log(stack.print())
console.log(stack.peek())
stack.pop()
console.log(stack.peek())