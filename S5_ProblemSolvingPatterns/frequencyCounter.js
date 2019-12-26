'use strict';

// Frequency counter pattern
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const len = arr1.length;
  const squared = {};
  const controlledSqured = {};
  for (let i = 0; i < len; i++) {
    const powered = Math.pow(arr1[i], 2);
    squared[powered] = (squared[powered] || 0) + 1;
    controlledSqured[arr2[i]] = (controlledSqured[arr2[i]] || 0) + 1; 
  }
  return arr2.every(y => squared[y] === controlledSqured[y]);
};

const sameFrequency = (n1, n2) => {
  let num1 = n1;
  let num2 = n2;
  const freqCounter1 = {};
  const freqCounter2 = {};
  while (num1 / 10) {
      if (!!Math.floor(num1 / 10) !== !!Math.floor(num2 / 10)) return false;
      const mod1 = num1 % 10;
      freqCounter1[mod1] = (freqCounter1[mod1] || 0) + 1;
      num1 = Math.floor(num1 / 10);
      const mod2 = num2 % 10;
      freqCounter2[mod2] = (freqCounter2[mod2] || 0) + 1;
      num2 = Math.floor(num2 / 10);
  }
  return Object.keys(freqCounter1).every(k => freqCounter1[k] === freqCounter2[k]);
}

const areThereDuplicates = (...args) => Object.values(
  args.reduce((acc, cur) => Object.assign({}, acc, { [cur]: (acc[cur] || 0) + 1 }), {})
).some(v => v > 1);


