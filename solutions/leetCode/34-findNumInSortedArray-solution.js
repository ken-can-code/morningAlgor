/*
You get passed a sorted array of positive intergers and a target number to find in the sorted array.
Output is the index of the target number in the sorted array.
If num is not in the array, return -1
Solve with a time complexity better than O(n).
const nums = [1, 4, 6, 7, 9, 17, 45]
findNumInSortedArray(nums, 17);  -> 5
findNumInSortedArray(nums, 8);  -> -1

O(log n) time
O(1) space
*/
const findNumInSortedArray = function (sortedArr, target) {
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (sortedArr[midIndex] === target) {
      return midIndex;
    }
    if (sortedArr[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return -1;
};

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findNumInSortedArray(nums, 17)); // -> 5
console.log(findNumInSortedArray(nums, 8)); // -> -1
