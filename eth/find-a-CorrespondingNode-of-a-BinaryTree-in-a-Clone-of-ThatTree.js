/**
 * 이 문제의 경우 특정 노드의 값이 target과 같은지를 찾아야하기 때문에 DFS보다 BFS알고리즘이 적합하다고 판단하였습니다.
 * original과 target이 같을 때 cloned의 위치를 알아야하기 때문에 큐에는 original과 cloned를 같이 삽입합니다.
 * 
 * 또한, 문제의 follow up에서 같은 값이 여러개일 때도 감안해서 처리해보라고 되어있어서
 * 두 노드의 동일성을 검증하는 checkNodesEquality함수를 생성하고
 * 해당 함수 내부에서는 단순히 상위노드의 값만 비교하는게 아니라 트리의 구성된 전체 노드들의 값이 동일한지도 파악하도록 작성하였습니다.
 */

const checkNodesEquality = (node1, node2) => {
    if (node1?.val !== node2?.val) return false;

    if (node1 === null && node2 === null) return true;

    return checkNodesEquality(node1?.left, node2?.left) && checkNodesEquality(node1?.right, node2?.right);
}

const getTargetCopy = function(original, cloned, target) {
    const queue = [original, cloned];

    while(queue.length) {
        const oNode = queue.shift(), cNode = queue.shift();

        if (checkNodesEquality(oNode, target)) {
            return cNode;
        }

        if (oNode.left) queue.push(oNode.left, cNode.left);
        if (oNode.right) queue.push(oNode.right, cNode.right);
    }
};