'use strict';

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) swap(arr, min, i);
  }
  return arr;
};

console.log(selectionSort([89, 12, 56, 3, 9, 0, -7, 8, -78, 462]));
