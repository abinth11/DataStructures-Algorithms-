class Node {
    constructor(value) {
        this.value = value;
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

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return "list is empty";
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    removeEnd() {
        if (this.isEmpty()) {
            return "list is empty";
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }
     //insert to given index;
     insertToGivenIndex(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index enter index properly...")
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            let node = new Node(value);
            node.next = prev.next;
            prev.next = node
            this.size++;
        }
    }
    //remove from given index;
    removeFromGivenIndex(index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index to remove a value");
            return;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }
    //remove given value from the list
    removeGivenValue(value){
        if(this.isEmpty()){
            console.log("list is empty ")
            return;
        }
        if(value===this.head.value){
            this.head=this.head.next;
            this.size--;
            return value;
        }else{
            let prev=this.head;
            while(prev.next&&prev.next.value!==value){
                prev=prev.next;
            }
            if(prev.next){
                let removedNode=prev.next;
                prev.next=removedNode.next;
                this.size--;
                return value;
            }
            return "The element is not present in the list"
        }
    }
    //search given value in the list
    search(value){
        if(this.isEmpty()){
            return "list is empty";
        }
        let current=this.head;
        let i=0;
        while(current){
            if(current.value==value){
                return i;
            }
            i++;
            current=current.next;
        }
        return "The element is not present in the list"
    }
    //to reverse the linked list
    reverse(){
        let prev=null;
        let current=this.head;
        while(current){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }

    printElementsAsArray() {
        let current = this.head;
        const result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(1);
list.prepend(3);
list.append(4);

console.log(list.printElementsAsArray());
console.log(list.removeFront());
console.log(list.removeEnd());
console.log(list.printElementsAsArray());
console.log(list.getSize());
list.reverse()
console.log(list.printElementsAsArray())
