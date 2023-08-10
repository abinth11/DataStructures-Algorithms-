class circularQueue{
    constructor(size){
        this.queue=new Array(size);
        this.capacity=size
        this.size=0;
        this.front=-1;
        this.rear=-1;
    }
    isFull(){
        return this.size===this.capacity;
    }
    isEmpty(){
        return this.size==0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear=(this.rear+1)%this.capacity;
            this.queue[this.rear]=element;
            this.size++;
            if(this.front==-1){
                this.front=this.rear;
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        let deletedElem=this.queue[this.front];
        this.queue[this.front]=null;
        this.front=(this.front+1)%this.capacity;
        this.size--;
        if(this.isEmpty()){
            this.front=-1;
            this.rear=-1;
        }
        return deletedElem;
    }
    peek(){
        if(!this.isEmpty()){
            return this.queue[this.front];
        }
        return null;
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            let str='',i;
            for( i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                str+=this.queue[i]+ " ";
            }
            str+=this.queue[i];
            console.log(str);

        }
    }
    toArray(){
        if(this.isEmpty()){
            console.log("queue is empty")
        }else{
            let result=[],i;
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                result.push(this.queue[i]);
            }
            result.push(this.queue[i]);
            return result;
        }
    }
}

let cQueue=new circularQueue(5);
// console.log(cQueue.isEmpty())
// console.log(cQueue.isFull());
cQueue.enqueue(10);
cQueue.enqueue(20);
cQueue.enqueue(30);
cQueue.enqueue(40);
cQueue.enqueue(50);
console.log(cQueue.peek());
console.log(cQueue.toArray())
