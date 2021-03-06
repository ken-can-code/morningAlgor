/* https://leetcode.com/problems/find-the-town-judge/ #997

In a town, there are N people labelled from 1 to N.  There is a rumor that one of these
people is secretly the town judge.

If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person
labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.
Otherwise, return -1.


Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1

Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3


Note:

    1 <= N <= 1000
    trust.length <= 10000
    trust[i] are all different
    trust[i][0] != trust[i][1]
    1 <= trust[i][0], trust[i][1] <= N

*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
  if (trust.length === 0) {
    return 1;
  }
  const notJudge = new Set();
  const trustedBy = {};

  for (let i = 0; i < trust.length; i += 1) {
    const trustSet = trust[i];
    const truster = trustSet[0];
    const trusted = trustSet[1];
    notJudge.add(truster);
    if (trustedBy[trusted] === undefined) {
      trustedBy[trusted] = [truster];
    } else {
      trustedBy[trusted].push(truster);
    }
  }
  for (let i = 1; i <= N; i += 1) {
    if (trustedBy[i] !== undefined
      && trustedBy[i].length === N - 1
      && !notJudge.has(i)) {
      return i;
    }
  }

  return -1;
};

// similar logic, cleaner/alternative syntax
const findJudgeAlternative = function (N, trust) {
  const truster = new Set();
  const trusted = [];

  trust.forEach((numSet) => {
    let [a, b] = numSet;
    a -= 1;
    b -= 1;
    truster.add(a);
    trusted[b] = (trusted[b] || 0) + 1;
  });

  for (let i = 0; i < N; i += 1) {
    if (!truster.has(i) && trusted[i] === N - 1) {
      return i + 1;
    }
  }

  return -1;
};

const test1 = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]; // 3
const test2 = [[1, 3], [2, 3], [3, 1]]; // -1
const test3 = [[1, 2]]; // 2

console.log(findJudgeAlternative(4, test1));
console.log(findJudgeAlternative(3, test2));
console.log(findJudgeAlternative(2, test3));

// every other number has to trust one number
// the judge number cannot ever be the fist number in a sub array
