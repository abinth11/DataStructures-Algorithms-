const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = nti;
  }
  return arr;
};

const insertionSortArr = [
  30, 2, 4, -22, 98, 999, 19, 1, 0, -33, 23, 3, 99, 23, 44,
];
console.log(insertionSort(insertionSortArr));


/**
 ** Complexity Analysis:
 *
 * Insertion Sort is a simple sorting algorithm with the following time complexities:
 *
 ** - Best Case: O(n)
 *   In the best-case scenario, the array is already sorted. Insertion Sort only requires a single
 *   pass through the array to verify that no swaps are needed, resulting in a linear time complexity.
 *
 ** - Average Case: O(n^2)
 *   In the average case, Insertion Sort performs multiple passes through the array, comparing and shifting
 *   elements as needed. This results in a quadratic time complexity, particularly for larger datasets.
 *
 ** - Worst Case: O(n^2)
 *   The worst-case scenario occurs when the array is in reverse order. In this case, Insertion Sort requires
 *   the maximum number of shifts and comparisons for each element, leading to a quadratic time complexity.
 *
 ** - Space Complexity: O(1)
 *   Insertion Sort is an in-place sorting algorithm, meaning it doesn't require additional memory allocation
 *   for temporary storage. The space complexity is constant, regardless of the input size.
 *
 * Insertion Sort can be efficient for small arrays or nearly sorted arrays, but it becomes less practical for
 * larger datasets. Other sorting algorithms like Quick Sort, Merge Sort, or Heap Sort are more efficient for
 * handling larger arrays and various scenarios.
 */