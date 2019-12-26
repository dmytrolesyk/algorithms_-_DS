const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivotItem = arr[start];
  let i = start + 1, swapIndex = start;

  for (; i <= end; i++) {
    if (arr[i] < pivotItem) {
      swapIndex++;
      swap(i, swapIndex, arr);
    }
  }
  swap(start, swapIndex, arr);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;
  const index = pivot(arr, left, right);
  
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, right);

  return arr;
};

console.log(quickSort(Array.from(Array(100), () => Math.round(Math.random() * 100))));
console.log(quickSort([93, 1, -9, 0, 11, -92, 142, 8, 56, 4, -90, 122]));

