/**
 * level별 노드의 합을 구해야하기 때문에 층별로 순회할 수 있도록 BFS알고리즘을 사용했습니다.
 * 
 * 아래 코드의 while문은 층별로 실행되며 초기에 queue에 있는 모든 노드를 nodes변수에 할당합니다.
 * 이 후, level을 상승시키고 nodes 변수에 reduce 메소드를 사용해 해당 level에 위치한 모든 노드의 val을 합산하며 
 * 이를 result의 value와 비교하여 현재 level의 총합이 더 크다면 result에 level과 함께 반영합니다.
 */

const maxLevelSum = function(root) {
    const result = { level: 0, value: -Infinity };
    let queue = [root], currLevel = 0;

    while(queue.length) {
        currLevel++;
        const nodes = [...queue];
        queue = [];
        
        const tempSum = nodes.reduce((acc, node) => {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            return acc + node.val;
        }, 0);
        
        if (tempSum > result.value) {
            result.level = currLevel, result.value = tempSum;
        }
    }

    return result.level;
};