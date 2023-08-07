const linearSearch = (arr: number[], t: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
};
const arr=[1,3,5,9,19,2,8,7]
const t=19
console.log(linearSearch(arr,t))