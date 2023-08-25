class MaxHeap {
    constructor() {
        this.heap = [];
    }
    insert(heap,val) {
        heap.length++;
        heap[heap.length - 1] = val;
        let i = heap.length-1;
        while (i >= 0) {
            let parent = Math.floor((i-1)/2)
            if (heap[parent] < heap[i]) {
                [heap[parent], heap[i]] = [heap[i], heap[parent]]
                i = parent;
            } else {
                return
            }
        }
    }
    insertMaxHeap(heap, value) {
        heap.push(value);  // Add new value to the end of the heap
        let currentIndex = heap.length - 1;  // Set current index to the last position
      
        // Loop until current index is at the root or the parent is greater than the current value
        while (currentIndex > 0) {
          // Swap parent and current value
          let parentIndex = Math.floor((currentIndex - 1) / 2);
          if(heap[Math.floor((currentIndex - 1) / 2)] < heap[currentIndex]){
            [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
            // Update current index to be the parent index
            currentIndex = parentIndex;
          }else{
            return
          }
        }
      
        return heap;  // Return the updated heap
      }

       delete(heap,index) {
        let deleted = heap[0];
        heap[index] = heap[heap.length-1]
        heap.pop();
        while (index<heap.length) {
            let leftChild = 2*index+1,rightChild = 2 * index + 2, greaterChild = index
            if( leftChild< heap.length&&heap[leftChild]>heap[greaterChild]){
                greaterChild=leftChild
            }
            if(rightChild<heap.length&&heap[rightChild]>heap[greaterChild]){
                greaterChild=rightChild
            }
            if (greaterChild!=index) {
                [heap[index], heap[greaterChild]] = [heap[greaterChild], heap[index]]
                index=greaterChild;
            }else{
                break;
            }
        }
        return deleted;
    }
    print() {
        return this.heap
    }
}

let heap = new MaxHeap();
heap.insert(heap.heap,50)
heap.insert(heap.heap,45)
heap.insert(heap.heap,35)
heap.insert(heap.heap,33)
heap.insert(heap.heap,30)
heap.insert(heap.heap,25)
heap.insert(heap.heap,34)
heap.insert(heap.heap,12)
heap.insert(heap.heap,10)
heap.insert(heap.heap,18)
heap.insert(heap.heap,16)
heap.insert(heap.heap,26)
console.log(heap.print());
// console.log(heap.delete(heap.heap,0))
// console.log(heap.print());