const getDigit = (n, position) => Math.floor(Math.abs(n) / Math.pow(10, position)) % 10;

const digitCount = n => !n ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1;

const mostDigits = arr => digitCount(Math.max(...arr));

const radixSort = arr => {
  const digitsNum = mostDigits(arr);
  for (let i = 0; i < digitsNum; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      const digit = getDigit(arr[k], i);
      buckets[digit].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(radixSort([23, 45, 67, 1, -9, 1213, -178, 5, 11, 66, -78]));
