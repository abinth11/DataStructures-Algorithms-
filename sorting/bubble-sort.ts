const bubbleSort = (arr: number[]): number[] => {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const bubbleSortArr = [
  30, 2, 4, -22, 98, 999, 19, 1, 0, -33, 23, 3, 99, 23, 44,
];
console.log(bubbleSort(bubbleSortArr));

/**
 ** Complexity Analysis:
 *
 * Bubble Sort is a simple sorting algorithm with the following time complexities:
 *
 ** - Best Case: O(n)
 *   In the best-case scenario, the array is already sorted. However, Bubble Sort performs a pass
 *   through the entire array to check if any swaps are needed. Since no swaps are required, the algorithm
 *   terminates early after a single pass, resulting in a linear time complexity.
 *
 ** - Average Case: O(n^2)
 *   In the average case, Bubble Sort performs multiple passes through the array, repeatedly comparing
 *   and swapping adjacent elements until the entire array is sorted. This results in a quadratic time complexity.
 *
 ** - Worst Case: O(n^2)
 *   The worst-case scenario occurs when the array is in reverse order. In this case, Bubble Sort requires
 *   the maximum number of swaps and comparisons for each element, leading to a quadratic time complexity.
 *
 ** - Space Complexity: O(1)
 *   Bubble Sort is an in-place sorting algorithm, meaning it doesn't require additional memory allocation
 *   for temporary storage. The space complexity is constant, regardless of the input size.
 *
 * It's important to note that while Bubble Sort is easy to understand and implement, its quadratic time
 * complexity makes it inefficient for large datasets. Other sorting algorithms like Quick Sort, Merge Sort,
 * or Heap Sort are more efficient for larger arrays.
 */