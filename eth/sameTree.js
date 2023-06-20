/**
 * 노드 개수의 최대값이 크지 않고 가독성이 좋은 코드를 위해 재귀 형식을 활용해 구현하였습니다.
 * return 부분에서 p와 q의 왼쪽과 오른쪽의 값이 같은지를 판단합니다.
 */

const isSameTree = function(p, q) {
    if (p === null && q === null) return true;

    if (p?.val !== q?.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};