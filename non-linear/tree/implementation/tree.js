class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    setRoot(rootValue) {
      this.root = new TreeNode(rootValue);
    }
  
    addChild(parentNode, childValue) {
      const childNode = new TreeNode(childValue);
      parentNode.children.push(childNode);
      return childNode;
    }
  
    getChild(parentNode, index) {
      return parentNode.children[index];
    }
  
    getChildren(parentNode) {
      return parentNode.children;
    }
  
    removeChild(parentNode, index) {
      if (index >= 0 && index < parentNode.children.length) {
        parentNode.children.splice(index, 1);
      }
    }
  
    traverse(node = this.root) {
      if (node) {
        console.log(node.value);
        for (const child of node.children) {
          this.traverse(child);
        }
      }
    }
  }
  
  // Creating a basic tree
  const tree = new Tree();
  tree.setRoot('Root');
  const rootNode = tree.root;
  
  const child1 = tree.addChild(rootNode, 'Child 1');
  const child2 = tree.addChild(rootNode, 'Child 2');
  
  const grandchild1 = tree.addChild(child1, 'Grandchild 1');
  const grandchild2 = tree.addChild(child1, 'Grandchild 2');
  
  tree.addChild(rootNode, 'Child 3');
  console.log(tree)
  console.log("Tree traversal:");
  tree.traverse();
  