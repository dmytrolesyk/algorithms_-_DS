'use strict';

const binarySearchRec = (arr, val) => {
  const middle = Math.floor(arr.length - 1 / 2);
  const item = arr[middle];
  if (!arr.length || (arr.length === 1 && val !== item)) return -1;
  if (val === item) return middle;
  if (val > item) return binarySearch(arr.slice(middle + 1, arr.length), val);
  if (val < item) return binarySearch(arr.slice(0, middle), val);
};

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}


const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(ar, 57));
