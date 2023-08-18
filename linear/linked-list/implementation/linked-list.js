class Node {
    constructor(val){
        this.val=val
    }
}
class LinkedList {
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++;
    }
    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else {
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    removeFromHead(){
      if(this.isEmpty()){
        return null
      }
      const removed = this.head.val
      this.head=this.head.next
      this.size--
      return removed
    }

    removeFromTail() {
        if (this.isEmpty()) {
            return null;
        }
        const removed = this.tail;
        let curr = this.head;
        while (curr && curr.next !== this.tail) {
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
        this.size--;
        return removed;
    }
    
    print(){
        let curr = this.head
        let result = ""
        while(curr){
         result+=curr.val+"=>"
         curr=curr.next
        }
        return result
    }

}

module.exports = LinkedList