//to create nodes in the list
class Node {
    constructor(value) {
        this.value = value;
        this.head = null;
    }
}
//class contains whole mehods for the linked list we can instantiate the class to create a linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.tail=null;
        this.size = 0;
    }
    //to check whether the list is empty or not
    isEmpty() {
        return this.size == 0;
    }
    //to get the size of the linked list
    getsize() {
        return this.size;
    }
    //insert to the start
    prepend(value) {
        let node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;    
        }else{
        node.next=this.head;
        this.head=node;
        }
        this.size++;   
    }
    //insert to the end
    append(value) {
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }
    removeFront(){
        if(this.isEmpty()){
            return "list is empty";
        }
        const value=this.head.value;
        this.head=this.head.next;
        this.size--;
        return value;

    }
    removeEnd(){
        if(this.isEmpty()){
            return "list is empty";
        }
        const value=this.tail.value;
        if(this.size==0){
            this.head=null;
            this.tail=null;
        }else{
            let prev=this.head;
            while(prev.next!=this.tail){
                prev=prev.next;
            }
            prev.next=null;
            this.tail=prev;
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
    //to print the list elements
    printListElements() {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
    //to return the list elements as an array
    printElementsAsArray() {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let current = this.head;
            let result = []
            while (current != null) {
                result.push(current.value);
                current = current.next;
            }
            return result;
        }
    }
}
let list = new LinkedList();
list.append(10)
list.append(20)
list.append(30);
list.prepend(1)
list.prepend(3);
list.append(4);
// console.log(list.getsize())
// console.log(list.printElementsAsArray())
// console.log(list.removeFromGivenIndex(4))
// console.log(list.removeGivenValue(100))
// console.log(list.removeGivenValue(10))
// console.log(list.printElementsAsArray())
// list.reverse();
console.log(list.printElementsAsArray());
console.log(list.removeFront());
console.log(list.removeEnd());
console.log(list.printElementsAsArray());
// console.log(list.search(30))
// list.printListElements();
// console.log(list.isEmpty())
console.log(list.getsize())
