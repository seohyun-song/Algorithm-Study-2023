/**
 * x와 y중 큰 값부터 먼저 처리해야 최고점을 얻을 수 있으므로 max와 min을 통해 더 큰 값을 max로 할당한다.
 * 이후, 반복문을 통해 temp변수에 넣고 빼며 ab 혹은 ba와 같은지 확인하고 알맞는 점수를 할당한다.
 * 
 * 첫 번째 for문에서는 max값을 기준으로 순환하며 점수를 올리고 반복문이 종료되면 아직 남아있는 문자열들을 s로 할당 및 temp를 초기화한다.
 * 두 번째 for문에서 min값을 기준으로 위와 같이 진행한 뒤 최종적으로 result 변수에 저장된 점수를 반환한다.
 */

const maximumGain = function(s, x, y) {
    let result = 0;
    let temp = [s[0]];

    const max = x > y ? "ab" : "ba";
    const min = x > y ? "ba" : "ab";
    const scores = {
        "ab": x,
        "ba": y
    };
    
    for(let i = 1; i < s.length; i++) {
        const str = `${temp.at(-1) + s[i]}`;

        if (str !== max) {
            temp.push(s[i]);
            continue;
        }

        temp.pop();
        result += scores[max];
    }

    s = temp.join('');
    temp = [s[0]];

    for(let i = 1; i < s.length; i++) {
        const str = `${temp.at(-1) + s[i]}`;

        if (str !== min) {
            temp.push(s[i]);
            continue;
        }

        temp.pop();
        result += scores[min];
    }

    return result;
};