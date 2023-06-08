/* Given two arrays of integers nums and index. Your task is to create target array under the following rules:
Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.
It is guaranteed that the insertion operations will be valid. */

/* Input: nums = [0,1,2,3,4], index = [0,1,2,2,1], Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]


Input: nums = [1,2,3,4,0], index = [0,1,2,3,0], Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]


Input: nums = [1], index = [0], Output: [1] 

1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i 
*/

var createTargetArray = function(nums, index) {
    let result = [];                         //함수 내부에서 빈 배열 result를 생성
    for (let i = 0; i < nums.length; i++) {  //for 반복문을 사용하여 nums 배열의 각 요소를 result 배열에서 index 배열에 지정된 위치에 삽입
        result.splice(index[i], 0, nums[i]);                                            
    }
    return result;
};


console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])); // [0,4,1,3,2]

console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0])); // [0,1,2,3,4]


console.log(createTargetArray([1], [0])); // [1] ,[0]
