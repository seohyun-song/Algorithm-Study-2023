
// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

//Example 1:
//Input: n = 3
//Output: 0
//Explanation: 3! = 6, 0이 0개

//Example 2:
//Input: n = 5
//Output: 1
//Explanation: 5! =5*4*3*2*1= 120,   0이 한개

//Example 3:
//Input: n = 10
//Output: 10! =10*9*8*7*6*5*4*3*2*1 =3,628,800  , 0이 두개
 
//Example 4:
//Input: n = 15
//Output: 15! =15*14*13*12*11*10*9*8*7*6*5*4*3*2*1 =1,307,674,368,000 , 0이 세개

 
// 숫자 n의 팩토리얼에서 10이 몇 번 나오는지 계산해야한다. 여기서 10은 5x2로 구성되어 있기 때문에, 5의 개수가 10의 개수를 결정하기 때문에 주어진 팩토리얼에 5가 몇번 나오지는를 함수로 만들어야 합니다.
// 

const trailingZeroes = function (n) {
  const count = (x) => {
    if (x <= 1) {
      return 0          //x라는 인자를 받아들인 후, x 이상의 모든 정수에서 5의 개수를 찾아 반환하고 만약 x가 1 이하이면, 0을 반환합니다.( 5 이하의 수에서는 0이 끝에 붙지 않는다는 것을 의미)
    }
    return Math.floor(x / 5) + count(Math.floor(x / 5))  //   Math.floor(x / 5)를 count 함수에 넘겨주고 ,  x 이상의 정수 중 5의 배수인 수의 개수를 반환합니다.
  }
  return count(n)
}