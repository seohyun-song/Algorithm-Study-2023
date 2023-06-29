/**
 * 문제에서 판사는 모든 마을 사람들이 믿는 반면, 판사는 어느 누구도 믿지 않는다고 했기 때문에
 * trust 배열을 순환하며 누군가를 믿는 사람이 있는지 여부를 판단하기 위한 trustPerson이라는 Set객체,
 * 또, 특정 사람을 몇 명이나 믿고 있는지를 파악하기 위한 counter라는 Map객체를 생성했습니다.
 * 
 * 이 후, for문에서 이 두 변수의 값들을 검증하여 판사를 찾고 없다면 -1을 반환합니다.
 * 검증 과정에서 일반 객체는 키가 문자열로 변환되기 때문에 코드 양과 가독성을 위해 Map객체를 사용하였으며
 * 제출 후, n이 1인 경우 통과하지 못하는 것을 파악하여 예외처리를 위해 13번 라인을 추가하였습니다.
 */

const findJudge = function(n, trust) {
    // 예외 처리
    if (n === 1) return n;
    
    const trustPerson = new Set(), counter = new Map();

    trust.forEach(([a, b]) => {
        const nextValue = counter.has(b) ? counter.get(b) + 1 : 1;
        counter.set(b, nextValue);
        trustPerson.add(a);
    });
    
    for(const [num, value] of counter) {
        if(value === n-1 && !trustPerson.has(num)) return num;
    }

    return -1;
};