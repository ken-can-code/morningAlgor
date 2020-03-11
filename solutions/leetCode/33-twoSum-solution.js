/* https://leetcode.com/problems/two-sum/ #1

Given an array of integers, return indices of the two numbers such that they add up to a specific
target.

You may assume that each input would have exactly one solution, and you may not use the same element
twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

/*
I - array of nums, and a target
O - array of indexes for nums that add up to target in provided array
C - mentioned some
E - mentioned some

nested loop, and compare each number (i) with each other number (k)
when number i and k added together total target, return [i, k]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const seenNums = {};

  for (let i = 0; i < nums.length; i += 1) {
    const compliment = target - nums[i];
    if (seenNums[compliment] === undefined) {
      return [seenNums[compliment], i];
    }
    seenNums[nums[i]] = i;
  }

  return false;
};

const testArr = [2, 4, 3, 8, 20, 14];
const testTarget = 28;

console.log(twoSum(testArr, testTarget));
