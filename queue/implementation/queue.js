class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  getSize() {
    return this.queue.length;
  }
  print() {
    return this.queue.toString();
  }
}

const queue = new Queue()
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(8)
queue.enqueue(10)
console.log(queue.print())
queue.dequeue()
console.log(queue.peek())
console.log(queue.print())