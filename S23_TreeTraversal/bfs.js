'use strict';

const BinarySearchTree = require("../S22_BinarySearchTrees/bts");
const Queue = require("../S21_StacksQueues/queue");

const bts = new BinarySearchTree();

bts
.insert(10)
.insert(6)
.insert(15)
.insert(6)
.insert(3)
.insert(8)
.insert(20);

const bfs = tree => {
  const values = [];
  const q = new Queue();
  q.enqueue(tree.root);
  while(q.size) {
    const node = q.dequeue(); 
    values.push(node.value);
    if (node.left) q.enqueue(node.left);
    if (node.right) q.enqueue(node.right);
  }
  return values;
};

const values = bfs(bts);

console.log(values)

