//1161
/** Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.


Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Level 1 sum = 989
Level 2 sum = 10250
Level 3 sum = 98693 + -89388
Level 4 sum = -32127
Output: 2
*/

/**BFS(Breadth First Search) 알고리즘을 사용하는게 적합할 것 같고 
 * 각 레벨 노드 값을 계산*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
  var maxLevelSum = function(root) {
    let maxSum = root.val;  //maxSum을 root의 값으로 초기화
    let maxLevel = 1;       //maxLevel과 level 변수는 각각 최대 레벨과 현재 레벨
    let level = 1;
    let queue = [root];     //queue 배열은 BFS를 위한 큐이고 root를 큐에 추가
    while (queue.length) {  //큐가 빌 때까지 반복
        const len = queue.length;   //현재 큐의 길이를 len에 저장
        let sum = 0;                //sum 변수를 0으로 초기화
        for (let i = 0; i < len; i++) {     
            const node = queue.shift();     //큐에서 현재 노드를 추출하여 node 변수에 저장
            sum += node.val;                //현재 레벨의 노드들의 값을 모두 더한 값을 sum 변수에 저장
            if (node.left) queue.push(node.left);   //현재 노드에서 좌우 자식 노드가 있다면, 큐에 추가
            if (node.right) queue.push(node.right);
        }
        if (sum > maxSum) {     //현재 레벨의 합인 sum이 maxSum보다 크면, 
            maxSum = sum;       //maxSum과 maxLevel 변수를 갱신
            maxLevel = level;  
        }
        level++;                //level 변수를 증가
    }
    return maxLevel;            //최대 레벨을 나타내는 maxLevel 변수를 반환
};
