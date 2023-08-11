class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    delete(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          if (current === this.head) {
            this.head = current.next;
            if (this.head) {
              this.head.prev = null;
            }
          } else if (current === this.tail) {
            this.tail = current.prev;
            if (this.tail) {
              this.tail.next = null;
            }
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          break;
        }
        current = current.next;
      }
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const dll = new DoublyLinkedList();
  dll.append(1);
  dll.append(2);
  dll.append(3);
  
  dll.prepend(0);
  
  dll.print();
  
  dll.delete(2);
  
  dll.print();
  