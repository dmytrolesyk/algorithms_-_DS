'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      const first = this.first;
      node.next = first;
      this.first = node;
    }
    return ++this.size;
  }
  pop() {
    if (!this.size) return undefined;
    const first = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      first.next = null;
    }
    this.size--;
    return first.value;
  }
}

module.exports = Stack;
