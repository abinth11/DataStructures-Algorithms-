class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        newNode.next = newNode; // Point to itself since it's the only node
        this.head = newNode;
      } else {
        newNode.next = this.head;
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        newNode.next = newNode; // Point to itself since it's the only node
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        newNode.next = this.head;
        current.next = newNode;
        this.head = newNode;
      }
    }
  
    delete(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        if (current === this.head) {
          this.head = null;
        } else {
          current.next = this.head.next;
          this.head = this.head.next;
        }
        return;
      }
  
      let current = this.head;
      let prev = null;
      while (current.next !== this.head) {
        if (current.data === data) {
          prev.next = current.next;
          return;
        }
        prev = current;
        current = current.next;
      }
  
      if (current.data === data) {
        prev.next = this.head;
      }
    }
  
    print() {
      if (!this.head) {
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  // Example usage:
  const cll = new CircularLinkedList();
  cll.append(1);
  cll.append(2);
  cll.append(3);
  
  cll.prepend(0);
  
  cll.print(); // Output: 0, 1, 2, 3, 0 (since it's circular)
  
  cll.delete(2);
  
  cll.print(); // Output: 0, 1, 3, 0 (since it's circular)
  