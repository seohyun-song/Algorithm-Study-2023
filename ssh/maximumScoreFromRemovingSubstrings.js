/**
 * 1717. Maximum Score From Removing Substrings
 * You are given a string s and two integers x and y. You can perform two types of operations any number of times.
    - Remove substring "ab" and gain x points.
        - For example, when removing "ab" from "cabxbae" it becomes "cxbae".
    - Remove substring "ba" and gain y points.
        - For example, when removing "ba" from "cabxbae" it becomes "cabxe".
    Return the maximum points you can gain after applying the above operations on s.
 * Constaints: 
    1 <= s.length <= 105
    1 <= x, y <= 104
    s consists of lowercase English letters.
 * Optimal choice & stack

    if x > y -> maxPointStr = 'ab' , minPointStr = 'ba'
    remove first the substrings of maximum points to get maximum score
    if last element of stack is 'a' and current character is 'b', remove the last element from the stack.
 */
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
	const max = Math.max(x, y);
	const min = Math.min(x, y);
	const maxPointStr = x > y ? "ab" : "ba";
	const minPointStr = x > y ? "ba" : "ab";
	let maxCount = 0;
	let minCount = 0;
	let stack = [];

	// remove first the substrings of maximum points to get maximum score
	for (char of s) {
		if (
			stack[stack.length - 1] === maxPointStr[0] &&
			char === maxPointStr[1]
		) {
			stack.pop();
			maxCount++;
			continue;
		}
		stack.push(char);
	}
	s = stack.join("");
	stack = [];

	for (char of s) {
		if (
			stack[stack.length - 1] === minPointStr[0] &&
			char === minPointStr[1]
		) {
			stack.pop();
			minCount++;
			continue;
		}
		stack.push(char);
	}

	return max * maxCount + min * minCount;
};
