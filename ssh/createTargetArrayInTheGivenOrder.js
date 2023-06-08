/**
 * 1389. Create Target Array in the Given Order
 * Given two arrays of integers nums and index. Your task is to create target array under the following rules:
    Initially target array is empty.
    From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    Repeat the previous step until there are no elements to read in nums and index.
    Return the target array.
    It is guaranteed that the insertion operations will be valid.
 * Example 1:
    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
 * Constraints:
    1 <= nums.length, index.length <= 100
    nums.length == index.length
    0 <= nums[i] <= 100
    0 <= index[i] <= i
 */
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 *
 * Runtime: 56 ms, Memory: 41.8 MB
 * 리스트 -> 순서 & 빈틈없는 데이터 적재
 */
var createTargetArray = function (nums, index) {
	const target = [];
	nums.forEach((num, i) => {
		i === index[i] ? target.push(num) : target.splice(index[i], 0, num);
	});
	return target;
};
