'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    const head = this.head;
    this.head = head.next;
    this.length--;
    if (!this.length) this.tail = null;
    return head;
  }
  traverse(position) {
    if (position >= this.length || position < 0) return null;
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === position) return current;
      current = current.next;
      counter++;
    }
  }
  get(position) {
    const node = this.traverse(position);
    return node ? node.val : node;
  }
  set(position, val) {
    const node = this.traverse(position);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prev = this.traverse(position - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();

    const prev = this.traverse(position - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  map(fn) {
    const newList = new SinglyLinkedList();
    let current = this.head;
    while (current) {
      newList.push((fn(current.val)));
      current = current.next;
    }
    return newList;
  }
  filter(fn) {
    const newList = new SinglyLinkedList();
    let current = this.head;
    while (current) {
      if (fn(current.val))
      newList.push(current.val);
      current = current.next;
    }
    return newList;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  values() {
    const valuesArr = [];
    let current = this.head;
    while(current) {
      valuesArr.push(current.val);
      current = current.next;
    }
    return valuesArr;
  }
  print() {
    console.log(this.values())
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('how');
list.push('are');
list.push('you');    
list.push('guys');    


// console.log(list);
list.print();
const reversed = list.reverse();
reversed.print();
process.exit(0)
console.log(list.values())
console.log(reversed.values())
console.log(list.insert(4, 'doing'));
console.log(list)
console.log(list.insert(0, 'yo'));
console.log(list)
console.log(list.insert(7, '!'));
console.log(list)
console.log(list.insert(9, '!'));

console.log(list.remove(5));
console.log(list.values())

// const upperList = list.map(s => s.toUpperCase()).filter(s => !s.startsWith('H'))