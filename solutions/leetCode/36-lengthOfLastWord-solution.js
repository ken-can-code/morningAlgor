/* https://leetcode.com/problems/length-of-last-word/ #58

Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
return the length of last word (last word means the last appearing word if we loop from
left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5

*/

/*

Although O(n) linear, this may be closer to an ideal solution than other solutions
because it starts at the back of the string and ends as soon as a space is seen after
a character has been seen. The worst case scenario is the same O(n) but the better cases
are superior.

Imagine if a novel is passed in as a string. A linear algo starting at the front must
proceed to the end before counting the last word. But the last word is simply the first
word when iterating backwards.

*/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let count = 0;
  
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === ' ' && count > 0) { // count > 0 means nonspace has been seen
      return count;
    }
    if (s[i] !== ' ') {
      count += 1;
    }
  }
  
  return count;
};

console.log(lengthOfLastWord(' Hello World now!   '));