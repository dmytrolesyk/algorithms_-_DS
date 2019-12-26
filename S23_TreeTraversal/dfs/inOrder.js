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

const inOrder = tree => {
  const values = [];
  const traverse = node => {
    if (node.left) traverse(node.left);
    values.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return values;
};

console.log(inOrder(bts));
