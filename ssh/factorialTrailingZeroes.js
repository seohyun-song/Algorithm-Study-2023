/**
  * 172. Factorial Trailing Zeroes
  * Given an integer n, return the number of trailing zeroes in n!.

    Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
  * Constraints: 0 <= n <= 10^4 
  * Example 1:
    Input: n = 3
    Output: 0
    Explanation: 3! = 6, no trailing zero.
  * Example 3:
    Input: n = 0
    Output: 0
  * 
  * 자바스크립트의 MAX_SAFE_INTEGER 값은 2^53 -1 으로 훨씬낮음(JavaScript Number -> 64비트 부동소수점)
  * 길이의 제약없이 정수를 다룰 수 있게 해주는 숫자형ㅇ니 BigInt 사용
  * BigInt는 BigInt형 숫자와 일반 Number를 섞어서 사용하지 못함
  */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
	const factorial = getFactorial(BigInt(n)).toString();
	let i = factorial.length;
	if (factorial[i - 1] !== "0") return 0;
	let count = 1;
	while (i >= 0) {
		if (factorial[i - 1] === factorial[i - 2]) {
			count++;
			i--;
		} else {
			return count;
		}
	}
};

// recursive function & BigInt
function getFactorial(n) {
	if (n <= 1) return 1n;
	return n * getFactorial(n - 1n);
}
