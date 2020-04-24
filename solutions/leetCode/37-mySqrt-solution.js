/* https://leetcode.com/problems/sqrtx/ #69

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2

Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.

*/

/**
 * @param {number} num
 * @return {number}
 */
const mySqrt = function(num) {
  let lower = 0;
  let upper = num;
  let current = 0;
  
  while (lower < upper) {
    current = upper - (Math.floor((upper - lower) / 2));
    if (current ** 2 <= num && (current + 1) ** 2 > num) {
      return current;
    }
    if (current ** 2 > num) {
      upper = current;
    } else {
      lower = current;
    }
  }
  
  return current;
};

console.log(mySqrt(1)); // 1
console.log(mySqrt(2)); // 1
console.log(mySqrt(3)); // 1
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(15)); // 3
console.log(mySqrt(16)); // 4
console.log(mySqrt(99)); // 9
console.log(mySqrt(100)); // 10
