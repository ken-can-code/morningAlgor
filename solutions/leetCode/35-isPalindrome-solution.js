/* https://leetcode.com/problems/valid-palindrome/ #125

Given a string, determine if it is a palindrome, considering only alphanumeric characters
and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

*/

/**
 * @param {string} string
 * @return {boolean}
 */
const isPalindrome = function (string) {
  const removedPunctuation = removePunctuation(string);
  for (let i = 0; i < removedPunctuation.length - 1; i += 1) {
    if (removedPunctuation[i] !== removedPunctuation[removedPunctuation.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const removePunctuation = function (string) {
  let removedPunctuation = '';

  for (let i = 0; i < string.length; i += 1) {
    const charCode = string[i].toLowerCase().charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      removedPunctuation += string[i].toLowerCase();
    }
  }

  return removedPunctuation;
};

const testString = 'raCe carR!';
// console.log(removePunctuation(testString));
console.log(isPalindrome(testString));
