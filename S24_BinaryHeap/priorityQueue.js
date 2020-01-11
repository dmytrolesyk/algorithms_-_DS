'use strict';

const swapValues = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const Node = class {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let curIndex = this.values.push(new Node(val, priority)) - 1;
    if (curIndex === 0) return this;
    let parentIndex = Math.floor((curIndex - 1) / 2);
    while (
      this.values[curIndex]
      && this.values[parentIndex]
      && this.values[curIndex].priority < this.values[parentIndex].priority
    ) {
      swapValues(this.values, parentIndex, curIndex);
      curIndex = parentIndex;
      parentIndex = Math.floor((curIndex - 1) / 2);
    }
    return this;
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (!this.values.length) return min;
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          rightChild.priority < element.priority
          && rightChild.priority < leftChild.priority
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;

      swapValues(this.values, idx, swap);
      idx = swap;
    }

    return min;
  }
}

module.exports = PriorityQueue;