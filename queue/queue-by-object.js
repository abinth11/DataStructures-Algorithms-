class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedNode = this.front;
    this.front = dequeuedNode.next;
    if (this.isEmpty()) {
      this.rear = null;
    }
    this.size--;
    return dequeuedNode.value;
  }

  getSize() {
    return this.size;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.value;
  }

  print() {
    let current = this.front;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(",");
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(8)
queue.enqueue(10)
console.log(queue.print())
queue.dequeue()
console.log(queue.peek())
console.log(queue.print())
