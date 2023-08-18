function quickSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = partition(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
function partition(arr: number[], left: number, right: number): number {
  let pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

let array = [1, 22, -88, 89, 0, 17, 69, 8, 9,3];
console.log(quickSort(array));


/**
 ** Complexity Analysis:
 *
 * Quick Sort is a highly efficient sorting algorithm with varying time complexities based on different cases:
 *
 ** - Best Case: O(n log n)
 *   In the best-case scenario, the pivot selection divides the array into roughly equal halves with each partitioning step.
 *   This results in the average time complexity of O(n log n), as each element participates in O(log n) levels of recursion.
 *
 ** - Average Case: O(n log n)
 *   On average, Quick Sort's partitioning divides the array in a balanced manner, leading to efficient sorting with an average
 *   time complexity of O(n log n). Each element participates in O(log n) levels of recursion.
 *
 ** - Worst Case: O(n^2)
 *   The worst-case scenario occurs when the pivot is chosen as the smallest or largest element, and partitioning is unbalanced.
 *   This leads to recursive calls with sub-arrays of sizes 1 and n-1, causing quadratic time complexity of O(n^2). However, using
 *   randomized pivot selection or the "Hoare Partition Scheme" can mitigate this issue and reduce the likelihood of worst-case behavior.
 *
 ** - Space Complexity: O(log n) (average), O(n) (worst)
 *   Quick Sort typically has good space complexity. The average space complexity is O(log n) due to the recursive call stack.
 *   However, in the worst-case scenario (unbalanced partitioning), the space complexity can degrade to O(n) due to the large number of recursive calls.
 *
 * Quick Sort is known for its average-case efficiency and adaptability to various scenarios. It's a popular choice among sorting algorithms.
 */
