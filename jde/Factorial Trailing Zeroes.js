/* 
  172. Factorial Trailing Zeroes

  Given an integer n, return the number of trailing zeroes in n!.
  Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

  Example 1:
  Input: n = 3
  Output: 0
  Explanation: 3! = 6, no trailing zero.

  Example 2:
  Input: n = 5
  Output: 1
  Explanation: 5! = 120, one trailing zero.

  Example 3:
  Input: n = 0
  Output: 0

  Constraints:
  0 <= n <= 104

*/

/*
  숫자의 가장 뒤에 0의 갯수를 세는 문제이다.
  0인 경우에는 숫자를 세지 않는다.
  n이 5의 배수인 경우에 규칙을 알 수 있다.
  0 ~ 4!는 0개, 5!~ 9!는 1개 이런 식이다.
  n = 25 일 때, 25/5 = 5 이고 여기서 한번더 나누면 5/5 = 1 이다.
  총 5 + 1 = 6, 이것을 코드로 작성하였다.
 */

let trailingZeroes = function(n) {   
  if (n === 0) return 0;            
  return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));  //재귀호출
};