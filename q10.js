// X만큼 간격이 있는 n개의 숫자

// 문제 설명

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 
// n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, 
// solution을 완성해주세요.

// 제한 조건

// x는 -10000000 이상, 1000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
    let answer = [];
    for (let i = 1; i <=n; i++) { //i는 n의 갯수, n은 자연수기때문에 i=1부터 반복문 시작
        answer.push(x*i) // .push()는 배열의 뒤에 요소를 추가함.
    }
    return answer;
}

console.log(solution(3, 5)) // 테스트1
console.log(solution(5,10)) // 테스트2