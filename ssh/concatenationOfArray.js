/**
 * 1929. Concatenation of Array
 * 
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
    Specifically, ans is the concatenation of two nums arrays.
    Return the array ans.
 * Constraints: 
    n == nums.length
    1 <= n <= 1000
    1 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Runtime: 69ms, Memory: 45.6MB
 */
var getConcatenation = function (nums) {
	return nums.concat(nums);
};

/**
 * solution 2: ES6 spread operator
 * Runtime: 79ms, Memory: 45.8MB
 */
var getConcatenation = function (nums) {
	return [...nums, ...nums];
};

/**
 * solution 3: push & spread
 * Runtime: 76 ms, Memory: 44.8MB
 */
var getConcatenation = function (nums) {
	nums.push(...nums);
	return nums;
};

/**
 * soltion 4: arr index 접근
 * Runtime: 85ms, Memory: 46.1MB
 *
 * ex) nums = [1,2]
 * result[0] = nums[0]& result[2]= nums[0]
 * result[1] = nums[1]& result[3]= nums[1]
 */
var getConcatenation = function (nums) {
	const result = [];
	const n = nums.length;
	nums.forEach((el, idx) => {
		result[idx] = el;
		result[idx + n] = el;
	});
	return result;
};
