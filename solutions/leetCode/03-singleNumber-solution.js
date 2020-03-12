/*
Given a non-empty array of integers, every element appears
twice except for one. Find that single one.

Note: Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums) {
  const numSet = new Set();

  nums.forEach((num) => {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  });

  return parseInt(...numSet, 10);
  // return numSet.values().next().value;
};

const singleNumberMath = function(nums) {
  const numSet = new Set(nums);

  let total = 0;
  numSet.forEach((num) => {
    total += num;
  });

  total *= 2;

  const sumOfWholeArray = nums.reduce((acc, num) => acc + num);

  return total - sumOfWholeArray;
};

// O(n) time
// O(1) space

const singleNumberXor = (nums) => {
  return nums.reduce((acc, num) => acc ^ num);
};

const hugeArray = [];

for (let i = 5; i < 5000000; i += 1) {
  hugeArray.push(i);
  hugeArray.push(i);
}
hugeArray.push(3);

console.log(singleNumberXor(hugeArray)); // --> 3
