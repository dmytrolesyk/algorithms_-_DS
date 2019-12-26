'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root
    while (true) {
      if (value === current.value) return this;
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        } 
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }
  find(value) {
      let current = this.root;
      while (true) {
        if (!current || current.value === value) return current;
        if (value < current.value) current = current.left;
        else current = current.right;
      }
  }
  contains(value) {
    return !!this.find(value);
  }
}

module.exports = BinarySearchTree;