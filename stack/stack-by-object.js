class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackByObject {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (!this.isEmpty()) {
      const poppedNode = this.top;
      this.top = poppedNode.next;
      this.size--;
      return poppedNode.value;
    } else {
      throw new Error("Stack is empty");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.top.value;
    } else {
      throw new Error("Stack is empty");
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    let current = this.top;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(" -> ");
  }
}

const stack1 = new StackByObject();
console.log(stack1.isEmpty());

stack1.push(20);
stack1.push(50);
stack1.push(60);
stack1.push(80);

console.log(stack1.print());
console.log(stack1.peek());

stack1.pop();
console.log(stack1.peek());
