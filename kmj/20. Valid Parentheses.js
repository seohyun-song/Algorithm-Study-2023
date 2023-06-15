/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */


var isValid = function(s) {

    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {        //문자 s[i]가 여는 괄호인 경우, 닫는 괄호를 stack.push()로 추가
            stack.push(')')
        }

        else if(s[i] === "{") {
            stack.push('}')
        }

        else if(s[i] === '[') {
            stack.push(']')
        }

        else if(s[i] !== stack.pop()) {      // 닫는 괄호인 경우 가장 최근에 추가된 괄호를 stack.pop()
            return false;                     // s의 문자와 stack의 마지막 요소가 다른 경우 false
        }
    }
    
    return !stack.length;
}                                               
//모든 문자열을 순회한 후 스택이 비어있으면 유효한 괄호 문자열이므로 true를 반환, 남아있다면 false를 반환
