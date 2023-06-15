/**
 * 리팩토링 전 코드
 * 
 * 괄호는 열린 괄호랑 닫힌 괄호로 구분할 수 있으므로
 * 이를 switch문을 사용해 열린 괄호라면 닫힌 괄호로 변환해 stack에 삽입하고
 * 닫힌 괄호라면 stack에서 pop메소드를 이용해 이전 괄호와 현재 괄호가 확인하는 방법을 사용했습니다.
 * 또한, s[i]가 닫힌 괄호인데 stack에서 pop된 요소와 다르다면 괄호의 짝이 맞지 않은것이므로 바로 false를 반환합니다.
 * 
 * 성능: 73ms, 42.3MB
 */

// const isValid = function(s) {
//     const stack = [];

//     for(let i = 0; i < s.length; i++) {
//         switch(s[i]) {
//             case "(":
//                 stack.push(")");
//                 break;
//             case "[":
//                 stack.push("]");
//                 break;
//             case "{":
//                 stack.push("}");
//                 break;
//             default:
//                 if(stack.pop() !== s[i]) return false;
//                 break;
//         }
//     }
    
//     return stack.length === 0;
// };


/**
 * 리팩토링 후 
 * 
 * 리팩토링 전 코드에서 가독성을 위해 switch문을 사용했지만 코드가 길어지는 느낌이 있어
 * 괄호를 객체로 정의해 코드를 더 간결하게 리팩토링 해보았습니다.
 * 
 * 성능: 57ms, 42.1MB
 */

const isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for(const b of s) {
        if (brackets[b]) {
            stack.push(b);
            continue;
        }

        const prev = stack.pop();
        if (brackets[prev] !== b) return false;
    }
    
    return stack.length === 0;
};