class Stack{
    constructor(size){
        this.queue1=[];
        this.queue2=[];
        this.size=size;
        this.currSize=0;
    }
    isEmpty(){
        return this.currSize==0;
    }
    empty(){
        return this.queue1.length==0;
    }
    isFull(){
        return this.size==this.currSize;
    }
    push(value){
        if(this.isFull()){
            console.log('stck is full')
        }else{
            this.queue2.push(value)
            while(!this.empty()){
                this.queue2.push(this.queue1.shift()); 
            }
            this.currSize++;
            // console.log(this.queue1)
            console.log(this.queue2);
            [[this.queue1],[this.queue2]]=[[this.queue2],[this.queue1]];
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty")
        }else{
         var removed= this.queue1.shift();
         this.currSize--;
         return removed;
        }
    }
    top(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue1[0];
    }
    print(){
        if(this.isEmpty()){
            return 'empty';
        }
        return this.queue1;
    }
}

let stack=new Stack(5)
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
console.log(stack.top());

console.log(stack.print());