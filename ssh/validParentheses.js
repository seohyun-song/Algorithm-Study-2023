/**
 * 20. Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.                                  
 * Constraints: 
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const stack = [];
	const brackets = {
		"{": "}",
		"(": ")",
		"[": "]",
	};
	for (char of s) {
		if (Object.keys(brackets).includes(char)) {
			// open bracket
			stack.push(char);
		} else {
			// close bracket
			if (stack.length === 0) return false;
			if (brackets[stack[stack.length - 1]] !== char) return false;
			if (brackets[stack[stack.length - 1]] === char) stack.pop();
		}
	}
	return stack.length === 0;
};
