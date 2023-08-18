const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left: number[] = mergeSort(arr.slice(0, mid));
    let right: number[] = mergeSort(arr.slice(mid));
    return merge(left, right);
}

let merge = (arr1: number[], arr2: number[]): number[] => {
    let result: number[] = [];
    let i: number = 0;
    let j: number = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

let arrayMergeSort: number[] = [1, 2, 3, 4, 5, 6, 6, 8, 9];
console.log(mergeSort(arrayMergeSort));

/**
 ** Complexity Analysis:
 *
 * Merge Sort is an efficient comparison-based sorting algorithm with the following time complexities:
 *
 ** - Best Case: O(n log n)
 *   Merge Sort divides the input array into halves, recursively sorts them, and then merges the sorted halves. The time complexity
 *   remains O(n log n) in the best case, as every element participates in log n levels of recursion.
 *
 ** - Average Case: O(n log n)
 *   Similar to the best case, Merge Sort's divide-and-conquer approach consistently results in a time complexity of O(n log n),
 *   making it an efficient sorting algorithm for large datasets.
 *
 ** - Worst Case: O(n log n)
 *   The worst-case scenario is the same as the average case, where Merge Sort consistently maintains a time complexity of O(n log n).
 *   This stability contributes to Merge Sort's popularity in various applications.
 *
 ** - Space Complexity: O(n)
 *   Merge Sort's space complexity is O(n) due to the need for temporary storage during the merge phase. The algorithm creates
 *   temporary arrays for merging sub-arrays.
 *
 * Merge Sort's consistent time complexity and stability make it a reliable choice for sorting tasks, especially when memory usage is not a concern.
 */
