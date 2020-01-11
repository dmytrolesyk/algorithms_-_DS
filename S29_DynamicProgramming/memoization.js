'use strict';

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = fn => {
  const cache = Object.create(null);
  return (...args) => {
    const key = generateKey(args);
    const val = cache[key];
    if (val) return val;
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
};

const fib = n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));

const mFib = memoize(fib);

console.log(mFib(45));
