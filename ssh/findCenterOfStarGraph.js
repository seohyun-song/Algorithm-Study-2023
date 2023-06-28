/**
 * 1791. Find Center of Star Graph
 * There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
    You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
 * Constraints:
    3 <= n <= 105
    edges.length == n - 1
    edges[i].length == 2
    1 <= ui, vi <= n
    ui != vi
    The given edges represent a valid star graph.
 * Example 1:
    Input: edges = [[1,2],[2,3],[4,2]]
    Output: 2
    Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
 * 
 * 아이디어! 인접 정점의 개수(차수)가 n-1이다.
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
	// 각 정점의 간선의 개수 구하는 객체
	const numOfEdge = {};
	const length = edges.length;

	// 배열순회하여 각 정점의 간선 개수 갱신
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < 2; j++) {
			const vertex = edges[i][j];
			if (vertex in numOfEdge) {
				numOfEdge[vertex]++;
			} else {
				numOfEdge[vertex] = 1;
			}
		}
	}
	// 객체를 순회하여 차수가 center node인 정점을 반환
	for (var vertex in numOfEdge) {
		if (numOfEdge[vertex] == length) return Number(vertex);
	}
};
