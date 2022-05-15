// 문제설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수,
// solution을 완성해주세요.

// 제한조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

function solution(num) {
    let answer ='' // answer 값에 빈 문자열 할당, let 선언은 재할당 가능
    if (num % 2 === 0) { // 매개변수 num의 값이 2로 나눈 나머지가 0일때,
        return answer = 'Even' // 문자열 'Even' 출력
    } else {
        return answer = 'Odd' // 조건문에 충족되지 않으면 문자열 'Odd' 출력
    }
} 
