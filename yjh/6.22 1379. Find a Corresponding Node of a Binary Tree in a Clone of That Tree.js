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

let getTargetCopy = function(original, cloned, target) {
  if (!original || !cloned) {
      return null; 
  }
  
  if (original === target) {
      return cloned; 
  }
  
  let left = getTargetCopy(original.left, cloned.left, target);
  let right = getTargetCopy(original.right, cloned.right, target);
  
  return left || right; 
};
