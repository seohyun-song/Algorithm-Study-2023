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
	let i = factorial.length - 1;
	if (factorial[i] !== "0") return 0;
	let count = 0;
	while (i >= 0) {
		if (factorial[i] === "0") {
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

/**
 * 리팩토링
 * 10의 배수이면 traniling zero 생김
 * 1!~4! -> trailing zero = 0
 * 5!~9! -> trailing zero = 1 / 5! = 5*4*3*2*1 (5*2=10) 5! 부터 10의 배수 생김
 * 10! ~ 14! -> trailing zero = 2 / 10! = 10*9! -> 100의 배수되므로
 * 15! ~ 19! -> trailing zero = 3 / 15! = 15*14! -> 15=5*3 여기서 5와 짝수를 곱하면 10을 만들수 있음 -> 1000의 배수
 * ...
 * 25! -> trailing zero = 6 / 25! = 25*24! -> 25 = 5*5이므로 5가 2개나 있으므로 짝수와 곱해서 100을 만들수 있음
 *
 * n<5보다 작으면 traniling zero = 0
 * n>=5크면 trailing zero = n/5
 * 하지만 예외 케이스 n/5 >= 5이면 trailing zero가 n/5 아님
 */
var trailingZeroes = function (n) {
	let answer = 0;
	while (n >= 5) {
		answer += Math.floor(n / 5);
		n = Math.floor(n / 5);
	}
	return answer;
};
