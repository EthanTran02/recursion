const fibs = (num) => {
  let arr = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    const sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }

  return arr;
};

const fibsRec = (num) => {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let pre = fibsRec(num - 1);
  pre.push(pre[pre.length - 1] + pre[pre.length - 2]);
  return pre;
};

console.log(fibsRec(8));
