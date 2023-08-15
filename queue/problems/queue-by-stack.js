class Queue {
    constructor(size) {
        this.stack1 =[];
        this.stack2 = [];
        this.size = size;
        this.currSize = 0;
    }
    isEmpty() {
        return this.currSize == 0;
    }
    isFull() {
        return this.currSize == this.size
    }
    enqueue(val) {
        if (this.isFull()) {
            console.log("Queue is full");
        } else {
            this.stack1.push(val);
            this.currSize++;
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            for(let i=0;i<this.currSize;i++){
                this.stack2.push(this.stack1.pop());
            }
            var removedEl=this.stack2.pop();
            this.currSize--;
            for(let i=0;i<this.currSize;i++){
                this.stack1.push(this.stack2.pop());
            }
            return removedEl;
        }
    }
    peek(){
        return this.stack1[0];
    }
    print(){
        return this.stack1;
    }
}

let queue=new Queue(4);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.enqueue(50)
console.log(queue.peek())
// console.log(queue.dequeue())
console.log(queue.print());