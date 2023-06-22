/*100.
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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

//재귀 DFS
var isSameTree = function(p, q) {
    if(!p && !q) return true;   //두개의 트리가 모두 null인 경우 이 두개의 트리는 같은 트리이므로 true를 반환
    if(!p || !q) return false;  //두개의 트리 중 하나만 null인 경우 두 트리는 다르므로 false를 반환
    if(p.val !== q.val) return false;   // 두 트리의 루트 노드 값이 다른 경우도 false를 반환
    
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))};

    //재귀 호출을 사용하여 두 개의 트리의 왼쪽 서브트리와 오른쪽 서브트리를 비교 
    //왼쪽 서브트리와 오른쪽 서브트리가 모두 같으면 true를 반환하고, 그렇지 않으면 false를 반환