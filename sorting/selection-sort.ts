const selectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return array;
};
let arraySelectionSort = [
  30, 2, 4, -22, 98, 999, 19, 1, 0, -33, 23, 3, 99, 23, 44,
];
console.log(selectionSort(arraySelectionSort));

/**
 ** Complexity Analysis:
 *
 * Selection Sort is a simple comparison-based sorting algorithm with the following time complexities:
 *
 ** - Best Case: O(n^2)
 *   In the best-case scenario, Selection Sort performs the same number of comparisons and swaps as in the average and worst cases.
 *   This is because the algorithm scans the entire unsorted portion of the array, regardless of its initial state.
 *
 ** - Average Case: O(n^2)
 *   Selection Sort repeatedly finds the minimum (or maximum) element from the unsorted portion and swaps it with the first unsorted element.
 *   This process is performed for each element, resulting in a quadratic time complexity of O(n^2).
 *
 ** - Worst Case: O(n^2)
 *   The worst-case scenario is the same as the average case, where Selection Sort performs a quadratic number of comparisons and swaps.
 *   This occurs when the input array is in reverse order or contains many equal elements.
 *
 ** - Space Complexity: O(1)
 *   Selection Sort is an in-place sorting algorithm, meaning it doesn't require additional memory allocation for temporary storage.
 *   The space complexity is constant, regardless of the input size.
 *
 * Selection Sort's simplicity comes at the cost of its quadratic time complexity, making it inefficient for large datasets.
 * Other sorting algorithms like Quick Sort, Merge Sort, or Heap Sort are generally more efficient for larger arrays.
 */
