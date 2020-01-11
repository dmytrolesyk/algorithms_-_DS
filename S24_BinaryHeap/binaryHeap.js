'use strict';

const swapValues = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    let curIndex = this.values.push(val) - 1;
    if (curIndex === 0) return this;
    let parentIndex = Math.floor((curIndex - 1) / 2);
    while (this.values[curIndex] > this.values[parentIndex]) {
      swapValues(this.values, parentIndex, curIndex);
      curIndex = parentIndex;
      parentIndex = Math.floor((curIndex - 1) / 2);
    }
    return this;
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (!this.values.length) return max;
    this.values[0] = end;

    let idx = 0;
    const len = this.values.length;
    const element = this.values[idx];

    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (rightChild > element && rightChild > leftChild) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;

      swapValues(this.values, idx, swap);
      idx = swap;
    }

    return max;
  }
}

const bh = new BinaryHeap();

bh
  .insert(4)
  .insert(8)
  .insert(11)
  .insert(15)
  .insert(5)
  .insert(12)
  .insert(36)
  .insert(100)
  .insert(1)
  .insert(13)
  .insert(6)
  .insert(9)
  .insert(25)
  .insert(17)
  .insert(19);

console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
console.log(bh.extractMax());
console.log(bh.values);
