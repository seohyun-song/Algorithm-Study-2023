/*1379.
Given two binary trees original and cloned and given a reference to a node target in the original tree.
The cloned tree is a copy of the original tree.Return a reference to the same node in the cloned tree.
Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
*/

//DFS 알고리즘
var getTargetCopy = function(original, cloned, target) {
    if (original === null) return null  // original이 null인 경우 null을 반환
    if (original === target) return cloned  //original이 target과 같은 경우, cloned를 반환
    
    return getTargetCopy(original.left, cloned.left, target) 
        || getTargetCopy(original.right, cloned.right, target)
};
//두경우 아니라면 재귀적으로 original의 왼쪽 서브트리와 clone의 왼쪽 서브트리를 비교하며 target을 찾고, 
//그렇지 않은 경우 오른쪽을 비교하여 target을 찾아 반환

