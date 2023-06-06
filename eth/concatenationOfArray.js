/**
 * 
 * Array의 concat메소드는 인자로 받은 배열을 기존 배열과 결합해 새로운 배열을 반환하며
 * 좀 더 간결한 코드를 위해 함수를 화살표 함수 형태로 사용
 */

const getConcatenation = nums => nums.concat(nums);

console.log(getConcatenation([1, 2, 1])); // [1,2,1,1,2,1]

console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]