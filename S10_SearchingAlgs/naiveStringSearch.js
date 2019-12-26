'use string';

const naiveStringSearch = (str, pattern) => {
  let count = 0;
  let index = 0;
  while(index < str.length) {
    for (let i = 0; i < pattern.length; i++) {
      if (str[index + i] !== pattern[i]) break;
      if (i === pattern.length - 1) count++;
    }
    index++;
  }
  return count;
};

console.log(naiveStringSearch("harold said haha in hamburg", "said"));