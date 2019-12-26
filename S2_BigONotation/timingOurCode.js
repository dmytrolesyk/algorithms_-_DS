const addUpToV1 = n => {
  let total = 0;
  for (let i = 0; i <= n; i++) total+=i;
  return total;
};

const addUpToV2 = n => n * (n + 1) / 2;

const begin = process.hrtime.bigint();
addUpToV1(1000000000);
const end = process.hrtime.bigint();
const diff = Number(end - begin) / 1e9;

console.log(`V1 - Time elapsed: ${diff} seconds`);

const begin1 = process.hrtime.bigint();
addUpToV2(1000000000);
const end1 = process.hrtime.bigint();
const diff1 = Number(end1 - begin1) / 1e9;

console.log(`V2 - Time elapsed: ${diff1} seconds`);

