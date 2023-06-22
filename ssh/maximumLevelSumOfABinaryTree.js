/**
 * 1161. Maximum Level Sum of a Binary Tree
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
    Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 * Constraints:
   - The number of nodes in the tree is in the range [1, 104].
   -  -105 <= Node.val <= 105
 * Example 1:
   Input: root = [1,7,0,7,-8,null,null]
    Output: 2
    Explanation: 
    Level 1 sum = 1.
    Level 2 sum = 7 + 0 = 7.
    Level 3 sum = 7 + -8 = -1.
    So we return the level with the maximum sum which is level 2.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
	// array of the sum of the values each level
	const levelSum = levelOrder(root).map((el) =>
		el.reduce((acc, cur) => acc + cur, 0)
	);

	// get the max value of array levelSum
	const max = Math.max(...levelSum);

	// get the index of the max value
	const indexOfMaxSum = levelSum.indexOf(max) + 1;
	return indexOfMaxSum;
};
function levelOrder(root) {
	if (!root) return [];
	let result = [];
	let queue = [root];
	while (queue.length !== 0) {
		let subarr = [];
		const n = queue.length;
		for (let i = 0; i < n; i++) {
			let node = queue.pop();
			subarr.push(node.val);
			if (node.left) queue.unshift(node.left);
			if (node.right) queue.unshift(node.right);
		}
		result.push(subarr);
	}
	// root = [1,7,0,7,-8,null,null]
	// result = [[1], [7,0], [7,-8]]
	return result;
}
