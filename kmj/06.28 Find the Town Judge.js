//997
/**
 * In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
If the town judge exists, then:
The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. 
If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 
마을에 1~n으로 라벨링된 n명의 사람들이 있는데 한 소문으로 1명이 마을의 판사다. 
만약 마을의 판사가 존재한다면 
1. 마을 판사는 아무도 신뢰하지 않는다. 
2. 모든사람은 마을 판사를 신뢰 
3. (1,2)를 만족하는 사람은 정확히 1명임.
trust[i] = [a,b] 주어지면 a가 b를 신뢰한다는 뜻,
만약 마을 판사가 존재하고 신원을 확인할 수 있는 경우 마을 판사의 라벨을 반환하고, 그렇지 않으면 -1 반환.

ex1)
Input: n = 2, trust = [[1,2]]
Output: 2
O -> O
1     2
ex2)
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

ex3)
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1  */

var findJudge = function(n, trust) {
    let trustScores = new Array(n+1).fill(0);

    for (let [a, b] of trust) {
    trustScores[a]--; // a는 b를 신뢰하지 않음
    trustScores[b]++; // b는 신뢰를 받음
  }

  // 신뢰도 배열에서 값이 (n-1)인 사람을 찾음
  for (let i = 1; i <= n; i++) {
    if (trustScores[i] === n-1) {
      // 마을 판사인지 확인하기 위해 다른 사람들이 이 사람을 신뢰하는지 확인
      for (let j = 1; j <= n; j++) {
        if (i !== j && trust[j] === i) {
          return -1; // 
        }
      }
      return i; // 
    }
  }

  return -1; // 
}
