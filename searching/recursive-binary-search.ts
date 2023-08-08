const recursiveBinarySearch = (arr: number[], target: number): number => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (
  arr: number[],
  target: number,
  leftIdx: number,
  rightIdx: number
): number => {
  if (leftIdx > rightIdx) {
    return -1;
  }
  const midIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (target===arr[midIdx]) {
    return midIdx;
  }
  if (target<arr[midIdx]) {
    return search(arr, target, leftIdx, midIdx-1);
  } else {
    return search(arr, target, midIdx+1, rightIdx);
  }
};
const arr=[1,3,5,6,8,9,19]
console.log(recursiveBinarySearch(arr,1))

//? Time complexity - O(log n)
//? Space complexity - O(log n)