class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, val) {
    if (!root) {
      return false;
    } else if (root.val === val) {
      return true;
    } else if (val < root.val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }

  preOrder(root) {
    let result = [];
    if (root) {
      result.push(root.val);
      result = result.concat(this.preOrder(root.left));
      result = result.concat(this.preOrder(root.right));
    }
    return result;
  }

  inOrder(root) {
    let result = [];
    if (root) {
      result = result.concat(this.inOrder(root.left));
      result.push(root.val);
      result = result.concat(this.inOrder(root.right));
    }
    return result;
  }

  postOrder(root) {
    let result = [];
    if (root) {
      result = result.concat(this.postOrder(root.left));
      result = result.concat(this.postOrder(root.right));
      result.push(root.val);
    }
    return result;
  }

  levelOrder(root) {
    let queue = [],
      result = [];
    queue.push(root);
    while (queue.length) {
      const curr = queue.shift();
      result.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return result;
  }

  min(root) {
    if (!root.left) {
      return root.val;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.val;
    } else {
      return this.max(root.right);
    }
  }
  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }
  deleteNode(root, val) {
    if (!root) {
      return root;
    }
    if (val < root.val) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.val) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.val = this.min(root.right);
      root.right = this.deleteNode(root.right, root.val);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(17);
// console.log(bst);
// console.log(bst.search(bst.root, 20));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 10));
// console.log(bst.preOrder(bst.root));
// console.log(bst.inOrder(bst.root));
// console.log(bst.postOrder(bst.root));
console.log(bst.levelOrder(bst.root));
bst.delete(5)
bst.delete(15)
bst.delete(3)
console.log(bst.levelOrder(bst.root))
