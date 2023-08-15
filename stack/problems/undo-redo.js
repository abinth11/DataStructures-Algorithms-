class Stack {
  constructor() {
    this.undo = [];
    this.redo = [];
  }
  isEmpty() {
    return this.undo.length == 0;
  }
  readLetters(str) {
    this.undo.push(str);
  }
  print() {
    let str = "";
    for (let i = 0; i < this.undo.length; i++) {
      str += this.undo[i];
    }
    return str;
  }
  unDo() {
    if (this.isEmpty()) {
      return null;
    } else {
      this.redo.push(this.undo.pop());
    }
  }
  reDo() {
    if (this.redo.length == 0) {
      return null;
    } else {
      this.undo.push(this.redo.pop());
    }
  }
}
let str1 = "a",
  str2 = "b",
  str3 = "i",
  str4 = "n";
let stack = new Stack();
stack.readLetters(str1);
stack.readLetters(str2);
stack.readLetters(str3);
stack.readLetters(str4);
stack.unDo();
stack.unDo();
stack.reDo();
console.log(stack.print());
stack.unDo();
stack.reDo()
stack.reDo()
console.log(stack.print());
