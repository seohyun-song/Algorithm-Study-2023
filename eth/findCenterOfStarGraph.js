/**
 * 별모양 그래프는 가운데 노드를 제외한 모든 노드가 가운데 노드와 인접 정점이므로
 * 모든 간선에서 공통적으로 등장하는 노드가 가운데 노드입니다.
 * 따라서, 첫 번쨰와 두 번째 간선에서 공통으로 등장하는 노드가 무엇인지 찾고 이를 반환하도록 코드를 작성하였습니다.
 */


const findCenter = function(edges) {
    const first = new Set(edges[0]), second = edges[1];

    return first.has(second[0]) ? second[0] : second[1];
};
