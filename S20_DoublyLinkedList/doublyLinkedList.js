'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }
    this.length--; 
    return tail;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    const head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.length--;
    return head;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = this.length / 2;
    let op = index <= middle ? _ => ++_ : _ => --_;
    let link =  index <= middle ? "next" : "prev";
    let counter = index <= middle ? 0 : this.length - 1;
    let current = index <= middle ? this.head : this.tail;
      while (counter !== index) {
        current = current[link];
        counter = op(counter);
      }
    return current;
  }
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const prev = this.get(index - 1);
    const newNode = new Node(value);

    newNode.next = prev.next;
    prev.next.prev = newNode;
    prev.next = newNode;
    newNode.prev = prev;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    
    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    
    this.length--;
    return node;
  }
  print() {
    const values = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values);
  }
}

const dll = new DoublyLinkedList();

dll
  .push(10) // 0
  .push(20) // 1
  .push(30) // 2
  .push(40) // 3
  .push(50) // 4
  .push(60) // 5
  .push(70) // 6
  .push(80) // 7
  .push(90) // 8
  .push(100) // 9

console.log(dll.remove(9))

console.log(dll.get(8))