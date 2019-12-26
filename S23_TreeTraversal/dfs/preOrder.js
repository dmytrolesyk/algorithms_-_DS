'use strict';

const BinarySearchTree = require("../../S22_BinarySearchTrees/bts");

const bts = new BinarySearchTree();

bts
  .insert(10)
  .insert(6)
  .insert(15)
  .insert(6)
  .insert(3)
  .insert(8)
  .insert(20);

const preOrder = tree => {
  const values = [];
  const traverse = node => {
    values.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return values;
};

console.log(preOrder(bts));
