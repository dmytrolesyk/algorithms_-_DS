'use strict';

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const insertion = arr => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i -1;
    for (; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
  }
  return arr;
};


console.log(insertion([3, 12, 56, 9, 0, -7, 8, -78, 462]));