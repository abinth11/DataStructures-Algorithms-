class MinHeap{
    constructor(){
        this.heap=[];
    }
    isEmpty(){
        return this.heap.length==0
    }
    insert(heap,val){
        heap.length++;
        heap[heap.length-1]=val;
        let i=heap.length-1;
        while(i>=0){
            let parent =Math.floor((i-1)/2)
            if(heap[parent]>heap[i]){
                [heap[i],heap[parent]]=[heap[parent],heap[i]];
                i=parent;
            }else{
                return
            }
        }
    }
    delete(heap,index){
         heap[index]=heap[heap.length-1];
         heap.pop();
         while(index<heap.length){
            let leftChild=2*index+1,rightChild=2*index+2,smallerChild=index
            if(leftChild<heap.length&&heap[leftChild]<heap[smallerChild]){
                smallerChild=leftChild
            }
            if(rightChild<heap.length&&heap[rightChild]<heap[smallerChild]){
                smallerChild=rightChild
            }
            if(smallerChild!=index){
                [heap[index],heap[smallerChild]]=[heap[smallerChild],heap[index]];
                index=smallerChild      
            }else{
                return
            }
         }
    }
    print(){
        return this.heap
    }
}
let minHeap=new MinHeap();
minHeap.insert(minHeap.heap,10);
minHeap.insert(minHeap.heap,15);
minHeap.insert(minHeap.heap,19)
minHeap.insert(minHeap.heap,20)
minHeap.insert(minHeap.heap,30)
minHeap.insert(minHeap.heap,25)
minHeap.insert(minHeap.heap,39);
minHeap.insert(minHeap.heap,23)
minHeap.insert(minHeap.heap,40)
minHeap.insert(minHeap.heap,28)
// minHeap.insert(minHeap.heap,50)
console.log(minHeap.print());
