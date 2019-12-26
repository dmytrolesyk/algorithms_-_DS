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

const postOrder = tree => {
  const values = [];
  const traverse = node => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    values.push(node.value);
  }
  traverse(tree.root);
  return values;
};

console.log(postOrder(bts));
