/**
 * 최초 코드
 * 
 * n이 최대 10^4 크기까지 올 수 있다는 제한사항이 있었다. 
 * 풀이 과정에서 Number 타입의 최대 값을 넘는 수가 다뤄지는것을 발견했고 
 * 이를 위해 숫자 연산시 BigInt타입으로 연산을 할 수 있도록 처리했다.
 * 
 * 또한, factorial의 결과값을 문자열로 변환한 뒤 정규표현식을 사용해서 
 * 숫자 뒤쪽에 연속되는 0의 개수를 반환하도록 코드를 작성했다.
 * 
 * 성능: 3779ms, 78.9MB
 */

/*
const factorial = (n) => {
    let num = BigInt(1);

    while (n > 1) {
        num = num * BigInt(n);
        n -= 1;
    }

    return num;
}

const trailingZeroes = (n) => {
    const num = factorial(n);

    if (num > 9) {
        const zeros = String(num).match(/0*0$/);
        return zeros ? zeros[0].length : 0;
    }

    return 0;
};

 */


/**
 * 리팩토링 코드
 * 
 * 이전 코드 제출 후 성능 그래프에서 다른 사람들에 비해 성능이 확연히 떨어지는것을 확인했고 
 * 코테 문제의 성능이 3779ms라는 경이로운 숫자가 의심스러워 !1 ~ !200까지의 숫자를 시범삼아 찍어봤다.
 * 이 후, 숫자 뒤 쪽에 연속되는 0이 일정한 규칙성을 갖고 있는것을 확인했다.
 * 뒤 쪽에 연속되는 0의 개수가 !5 ~ !9는 1개, !10 ~ !14는 2개와 같은식의 규칙성이 있다는것을 발견하고 
 * 이를 토대로 리팩토링 코드를 작성했다.
 * 
 * 성능: 58ms, 42MB
 */

const trailingZeroes = function(n, zeros = 0) {
    if (n < 5) return zeros;

    const quotient = Math.floor(n / 5);
    zeros += quotient;

    return trailingZeroes(quotient, zeros);
};