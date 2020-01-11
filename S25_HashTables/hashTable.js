'use strict';

const hash = require('./hashFunction');

const unique = arr => {
  const uniqArr = [];
  for (const item of arr) {
    if (!uniqArr.includes(item)) uniqArr.push(item);
  }
  return uniqArr;
}

class HashTable {
  constructor(size=4) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    return hash(key, this.keyMap.length);
  }
  set(key, val) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [[key, val]];
    else this.keyMap[hashedKey].push([key, val]);
  }
  get(key) {
    const hashedKey = this._hash(key);
    const slot = this.keyMap[hashedKey]
    if (!slot) return undefined;
    for (const [k, v] of slot) {
      if (k === key) return v;
    }
    return undefined;
  }
  keys() {
    const keys = [];
    this.keyMap.forEach(slot => {
      if (Array.isArray(slot)) {
        slot.forEach(([k]) => keys.push(k));
      }
    });
    return keys;
  }
  values() {
    const vals = [];
    for (const slot of this.keyMap) {
      if (Array.isArray(slot)) {
        for (const [, val] of slot) {
          if (!vals.includes(val)) vals.push(val);
        }
      }
    }
    return vals;
  }
}

const ht = new HashTable();

ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("I love", "pizza");
ht.set("yoy", "you are cool");
ht.set("yoo", "are cool");
ht.set("yop", "pizza");

// console.log(ht.get("hello world"));
// console.log(ht.get("dogs"));
// console.log(ht.get("I love"));
// console.log(ht.get("cats"));
// console.log(ht.get("yo"));

console.log(ht.keys());
console.log(ht.values());