/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
let minScore = function(n, roads) {
  const inf = new Map();
  
  for (const [city1, city2, d] of roads) {
      if (inf.has(city1)) {
          const arr = inf.get(city1);
          arr.push([city2, d]);
          inf.set(city1, arr);
      } else {
          inf.set(city1, [[city2, d]]);
      }
      
      if (inf.has(city2)) {
          const arr = inf.get(city2);
          arr.push([city1, d]);
          inf.set(city2, arr);
      } else {
          inf.set(city2, [[city1, d]]);
      }
  }
  
  let ans = Infinity;
 
  //dfs사용하려고 했는데, 잘 모르겠어서 공란으로 둡니다.(모르겠어여!)

  return ans;
};