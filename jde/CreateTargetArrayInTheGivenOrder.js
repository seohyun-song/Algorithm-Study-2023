/*
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

 

Example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]          nums[0] 0, index[0], [0]에 0이 추가
1            1        [0,1]        nums[1] 1, index[1], [1]에 1이 추가
2            2        [0,1,2]      nums[2] 2, index[2], [2]에 2가 추가
3            2        [0,1,3,2]    nums[3] 3, index[2], [2]에 3으로 교체, 원래 있었던 2는 뒤로 밀린다.
4            1        [0,4,1,3,2]  nums[4] 4, index[1], [1]에 4로 교체, 원래 있었던 1,3,2는 뒤로 밀린다.

Example 2:
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]          nums[0] 1, index[0], [0]에 1 추가
2            1        [1,2]        nums[1] 2, index[1], [1]에 2 추가
3            2        [1,2,3]      nums[2] 3, index[2], [2]에 3 추가
4            3        [1,2,3,4]    nums[3] 4, index[3], [3]에 4 추가
0            0        [0,1,2,3,4]  nums[4] 0, index[0], [0]에 0 교체, 원래 있었던 1,2,3,4는 뒤로 밀린다.

Example 3:
Input: nums = [1], index = [0]
Output: [1]

Constraints:
1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i
*/
/**
 * 위 설명에 nums[i]의 요소를 index[i]에 넣어준다는 것을 보고 splice 함수를 사용하는 것이 옳다고 판단했다.
 * 그리고 nums와 index에서 읽을 요소가 없을 때까지 반복하라고 되어 있는 것을 보고 for 반복문을 사용하였다.
 * index[i] 인덱스가 기존 배열이 되고, 배열 i번째에 num[i]의 요소를 추가한다. 그리고 위에 예시에 결과값에 삭제되는 요소가 없으니 0을 써줘서 어떤 요소도 삭제되지 않게 한다.
 * 반복문이 끝나면 target 반환.
 * 
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];

    for(let i = 0; i < nums.length; i++){
        target.splice(index[i], 0, nums[i]);  // 0은 어떤 요소도 삭제되지 않는다는 뜻
    }
    return target;
};