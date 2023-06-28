/**
 * 997. Find the Town Judge
 * In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
    If the town judge exists, then:
    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.
    You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
    Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.      
 * Constraints:
    - 1 <= n <= 1000
    - 0 <= trust.length <= 104
    - trust[i].length == 2
    - All the pairs of trust are unique.
    - ai != bi
    - 1 <= ai, bi <= n
 *
 * 
 */
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	// town judge 인지 확인
	// everybody trust the town judge
	const countTownJudge = Array(n).fill(0);
	// town judge trusts nobody
	const trustPerson = [];

	for (let i = 0; i < trust.length; i++) {
		const idx = trust[i][1] - 1;
		trustPerson.push(trust[i][0]);
		countTownJudge[idx]++;
	}

	// 자신을 믿는 사람이 자신을 제외한 나머지 전부 이면서 자신은 아무도 믿지 않으면
	if (
		countTownJudge.indexOf(n - 1) !== -1 &&
		trustPerson.indexOf(countTownJudge.indexOf(n - 1) + 1) === -1
	) {
		return countTownJudge.indexOf(n - 1) + 1;
	} else {
		return -1;
	}
};
