const LinkedList = require("../../linked-list/implementation/linked-list");

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }
  isEmpty() {
    return this.queue.isEmpty();
  }
  getSize() {
    return this.queue.getSize();
  }
  enqueue(val) {
    return this.queue.append(val);
  }
  dequeue() {
    return this.queue.removeFromHead();
  }
  peek(){
    return this.queue.head.val
  }
  print() {
    return this.queue.print();
  }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(35)
console.log(queue.print())
queue.dequeue()
queue.dequeue()
console.log(queue.print())
console.log(queue.peek())
