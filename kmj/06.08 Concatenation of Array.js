/**1929.
 *  Q: Given an integer array nums of length n, you want to create an array ans of length 2n 
   where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
   Specifically, ans is the concatenation of two nums arrays. Return the array ans.

   integer 배열 nums가 주어짐 (길이가 n), 길이가 2n인 배열 ans를 만들어라.
   ans[i] == nums[i] , ans[i + n] == nums[i] (0 <= i < n 이고 인덱스는 0부터) */

   var getConcatenation = function(nums) {
    const result = [];                      // 배열 초기화
    for(let i= 0;  i< nums.length; i++) {   // 반복문을 통해 nums의 원소들을 
        result[i] = nums[i];                // result 배열에 넣고
        result [i + nums.length] = nums[i]  // 뒤에 nums의 원소들을 또 이어붙여 넣는 것으로 배열을 이어붙이는 연산
    }
    return result;
};
