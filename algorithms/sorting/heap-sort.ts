
const heapSort = (arr:number[]):number[] => {
    for (let i =Math.floor(arr.length/2)-1; i >=0; i--) {
        heapify(arr,arr.length, i);
    }
    for (let i =arr.length-1; i >0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr,i,0);
    }
    return arr;
}


const heapify = (arr:number[], length:number, i:number) => {
    let largest = i, left = 2 * i + 1, right = 2 * i + 2
    if(left < length && arr[left] > arr[largest]) {
        largest = left
    }
    if(right <length && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest !== i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]]
        heapify(arr, length, largest);
    }
}
let arrayH = [10, 15, 19,100, 20, 28,25, 39, 23, 40, 30]
console.log(heapSort(arrayH))

/**
 ** Complexity Analysis:
 *
 * Heap Sort is an efficient comparison-based sorting algorithm with the following time complexities:
 *
 ** - Best Case: O(n log n)
 *   In the best-case scenario, Heap Sort performs the same number of comparisons and swaps as in the average and worst cases.
 *   This is because the algorithm constructs the heap and performs the heapify operation, both of which take O(n log n) time.
 *
 ** - Average Case: O(n log n)
 *   Heap Sort builds a max-heap data structure, rearranges the heap to satisfy the max-heap property, and repeatedly extracts the
 *   maximum element from the heap. These operations result in a consistent time complexity of O(n log n).
 *
 ** - Worst Case: O(n log n)
 *   The worst-case scenario is the same as the average case, where Heap Sort maintains a time complexity of O(n log n).
 *   This efficiency makes Heap Sort suitable for large datasets.
 *
 ** - Space Complexity: O(1)
 *   Heap Sort is an in-place sorting algorithm, meaning it doesn't require additional memory allocation for temporary storage.
 *   The space complexity is constant, regardless of the input size.
 *
 * Heap Sort is efficient and performs well on large datasets. Its consistent time complexity and in-place nature make it a reliable choice for sorting.
 */
