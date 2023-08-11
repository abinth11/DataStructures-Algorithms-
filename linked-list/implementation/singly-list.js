class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }
  delete(data) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.isEmpty()) {
        this.tail = null; // Update the tail if list became empty
      }
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current; // Update the tail if last node was deleted
        }
        return;
      }
      current = current.next;
    }
    this.size--;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next; // Store the next node
      current.next = prev; // Reverse the 'next' pointer

      // Move the pointers one step ahead
      prev = current;
      current = next;
    }

    // Update 'head' and 'tail' pointers
    this.tail = this.head;
    this.head = prev;
  }

  middle() {
    let slowPointer = this.head;
    let fastPointer = this.head;
    while (fastPointer && fastPointer.next) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    return slowPointer.val;
  }

  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += curr.val + "=>";
      curr = curr.next;
    }
    return list;
  }
  printAsArray() {
    let curr = this.head;
    const result = [];
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.prepend(40);
ll.prepend(50);
ll.prepend(60);
ll.append(70)
console.log(ll.print());
ll.reverse();
console.log(ll.middle())
console.log(ll.print());

/**
 * Append Method Complexity Analysis:
 * -----------------------------------
 * Time Complexity: O(1) - Constant time complexity.
 * Explanation: Appending an element involves updating the 'next' pointer of the current
 * tail node to the new node and then updating the tail pointer to the new node.
 */

/**
 * Prepend Method Complexity Analysis:
 * ------------------------------------
 * Time Complexity: O(1) - Constant time complexity.
 * Explanation: Prepending an element involves updating the 'next' pointer of the new node
 * to the current head node and then updating the head pointer to the new node.
 */

/**
 * Delete Method Complexity Analysis:
 * -----------------------------------
 * Time Complexity: O(n) - Linear time complexity in the worst case.
 * Explanation: Deleting an element requires finding the node with the specified data in
 * the worst case, which involves traversing the linked list. In the best case (deleting
 * the head node), it's O(1), and in the worst case (deleting the last node), it's O(n).
 */

/**
 * Reverse Method Complexity Analysis:
 * -----------------------------------
 * Time Complexity: O(n) - Linear time complexity.
 * Explanation: Reversing a linked list requires traversing the entire list once.
 * During the traversal, each node's 'next' pointer is updated to point to the previous node.
 * This operation takes constant time for each node, and since there are 'n' nodes in the list,
 * the overall time complexity is linear, O(n).
 */

/**
 * Print Method Complexity Analysis:
 * ----------------------------------
 * Time Complexity: O(n) - Linear time complexity.
 * Explanation: Printing the linked list requires traversing all nodes once to construct
 * the string representation. The time taken is directly proportional to the number of nodes.
 */

/**
 * PrintAsArray Method Complexity Analysis:
 * ----------------------------------------
 * Time Complexity: O(n) - Linear time complexity.
 * Explanation: Constructing an array representation involves traversing all nodes once and
 * appending each value to the array. The time taken is directly proportional to the number
 * of nodes.
 */

// ...
