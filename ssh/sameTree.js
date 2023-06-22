/**
 * 100. Same Tree
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * Constraints: 
    - The number of nodes in both trees is in the range [0, 100].
    - -104 <= Node.val <= 104
 * 
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	// 둘다 빈 노드일 때
	if (p === null && q === null) {
		return true;
	} else if (p !== null && q !== null) {
		// 둘다 빈노드가 아니고 val, left, right 다 같을 때
		return JSON.stringify(p) === JSON.stringify(q) ? true : false;
	} else {
		// 무조권 false
		// p === null && q !== null
		// p !== null && q === null
		return false;
	}
};
