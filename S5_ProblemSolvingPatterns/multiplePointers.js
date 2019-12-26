'use strict';

// Multiple pointers pattern
const countUniqueValues = arr => {
  if (!arr.length) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      ++j;
    } else {
      ++i;
      arr[i] = arr[j];
      ++j;
    }
  }
  ++i;
  return i; 
};

const averagePair = (arr, av) => {
  if (arr.length < 2) return false;
  let i = 0;
  let j = 1;
  let moveI = false;
  while (j < arr.length) {
      if ((arr[i] + arr[j]) / 2 === av) return true;
      else {
          if (moveI) {
              ++i;
              moveI = false;
          } else {
              ++j;
              moveI = true;
          }
      }
  }
  return false;
};

const isSubsequence = (s1, s2) => {
  let i = 0;
  let j;
  for (j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) i++;
  }
  return i >= s1.length;
};
