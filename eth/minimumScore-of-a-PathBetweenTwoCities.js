/**
 * DFS 알고리즘을 적용해 풀었으며 첫 번째 for~of문에서는 연결되어있는 모든 간선의 경로를 객체화합니다.
 * 이 후, dfs 함수를 통해 1부터 갈 수 있는 모든 노드들을 방문하며 result변수의 값과 가중치의 값 중 더 작은 값을 할당합니다.
 */

const minScore = function(n, roads) {
    let result = Infinity;
    const pathMap = {}, visited = new Set();

    for (const [s, e, w] of roads) {
        if (!pathMap[s]) pathMap[s] = [];

        pathMap[s].push([e, w]);

        if (!pathMap[e]) pathMap[e] = [];
        
        pathMap[e].push([s, w]);
    }

    function dfs(start) {
        if (visited.has(start)) return;

        visited.add(start);
        
        const paths = pathMap[start];

        for (const [e, w] of paths) {
            result = Math.min(w, result);
            
            if (!pathMap[e]) continue;

            dfs(e);
        }
    }

    dfs(1);

    return result;
};