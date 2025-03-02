const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

// Helper function
function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx += 1;
    } else {
      result.push(right[rightIdx]);
      rightIdx += 1;
    }
  }

  while (leftIdx < left.length) {
    result.push(left[leftIdx]);
    leftIdx += 1;
  }

  while (rightIdx < right.length) {
    result.push(right[rightIdx]);
    rightIdx += 1;
  }
  return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
