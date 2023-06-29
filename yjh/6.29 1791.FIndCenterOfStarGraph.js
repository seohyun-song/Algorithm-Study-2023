/**
 * @param {number[][]} edges
 * @return {number}
 */
let findCenter = function(edges) {
  const node1 = edges[0][0];
  const node2 = edges[0][1];

  let count = 0;
  for (let i = 0; i < edges.length; i++) {
    if (edges[i][0] === node1 || edges[i][1] === node1) {
      count++;
    }
  }

  if (count === edges.length) {
    return node1;
  } else {
    return node2;
  }
};
