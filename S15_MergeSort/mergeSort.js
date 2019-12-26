const merge = (a, b) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
          res.push(a[i]);
          i++;
      } else {
          res.push(b[j]);
          j++
      }
  }

  if (i < a.length) {
      res.push(...a.slice(i))
  } else {
      res.push(...b.slice(j));
  }
  
  return res;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr; // base case
  const middle = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, middle)), 
    mergeSort(arr.slice(middle))
  );
};

console.log(mergeSort(Array.from(Array(1e6), x => (Math.random()))));

console.log(mergeSort([10, 15, 132, 65, 5, 1, -2, -78, 891, 901, -7832, 8, 16]));
