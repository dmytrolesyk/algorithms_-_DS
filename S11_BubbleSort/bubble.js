'use strict';

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const bubbleSort = arr => {
  for (let i = arr.length; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr; 
};

const bubbleSort2 = arr => {
  let sorted = false;
  while (!sorted) {
    let swapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      } 
    }
    sorted = !swapped;
  }
  return arr; 
};

console.log(bubbleSort([89, 12, 56, 3, 9, 0, -7, 8, -78, 462]));
console.log(bubbleSort2([89, 12, 56, 3, 9, 0, -7, 8, -78, 462]));


// const begin = process.hrtime.bigint();
// for(let k = 10000000; k > 0; k-- ) { bubbleSort([89, 12, 56, 3, 9, 0, -7, 8, -78, 462]); }
// const end = process.hrtime.bigint();
// const diff = Number(end - begin) / 1e9;

// console.log(`V1 - Time elapsed: ${diff} seconds`);

// const begin1 = process.hrtime.bigint();
// for(let z = 10000000; z > 0; z-- ) { bubbleSort2([89, 12, 56, 3, 9, 0, -7, 8, -78, 462]); }
// const end1 = process.hrtime.bigint();
// const diff1 = Number(end1 - begin1) / 1e9;

// console.log(`V2 - Time elapsed: ${diff1} seconds`);
