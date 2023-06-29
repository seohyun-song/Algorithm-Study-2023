/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
let findJudge = function(n, trust) {
  const trustCounts = new Array(n + 1).fill(0);

  for (let [a, b] of trust) {
    trustCounts[a]--;
    trustCounts[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }

  return -1;
};
