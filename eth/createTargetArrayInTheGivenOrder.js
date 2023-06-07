/**
 * 
 * 배열의 reduce메소드의 초기값을 빈 배열로 설정하고
 * 반복시마다 splice 메소드를 통해 적절한 위치에 요소를 삽입하는 방식을 사용
 * 
 * splice메소드는 아무 요소도 삭제하지 않고 요소를 삽입하는 경우
 * 해당 인덱스부터 끝까지의 요소들이 모두 한 자리씩 밀려나기 때문에 문제에 적합하다고 판단되었습니다.
 */

const createTargetArray = (nums, index) => {
    return index.reduce((acc, insertIdx, i) => {
        acc.splice(insertIdx, 0, nums[i]);
        return acc;
    }, []);
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])); // [0,4,1,3,2]

console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0])); // [0,1,2,3,4]

console.log(createTargetArray([1], [0])); // [1]