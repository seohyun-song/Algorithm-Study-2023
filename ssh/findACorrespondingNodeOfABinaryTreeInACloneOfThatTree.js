/**
 * 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
    * Given two binary trees original and cloned and given a reference to a node target in the original tree. 
    The cloned tree is a copy of the original tree.
    Return a reference to the same node in the cloned tree.
    * Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
 * Constraints: 
    - The number of nodes in the tree is in the range [1, 104].
    - The values of the nodes of the tree are unique.
    - target node is a node from the original tree and is not null.
 * 
 * theories -> Binary Tree(이진트리) & Recursion(재귀) & short circuit evaluation(단축평가) & object comparison
 * object comparison -> 참조형을 원시형으로 바꾸어서 비교
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
	if (original !== null) {
		if (JSON.stringify(original) === JSON.stringify(target)) {
			return cloned;
		}
		return (
			getTargetCopy(original.left, cloned.left, target) ||
			getTargetCopy(original.right, cloned.right, target)
		);
	}
};
