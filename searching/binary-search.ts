const binarySearch = (arr: number[], t: number): number => {
    let l = 0,
      r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] === t) {
        return mid;
      }
      if (arr[mid] < t) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return -1;
  };
  const array = [3, 5, 6, 8, 19];
  const target = 3;
  console.log(binarySearch(array, target));

//? Time complexity - O(log n)
//? Space complexity - O(1)
  