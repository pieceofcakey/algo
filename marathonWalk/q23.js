//  자연수 뒤집어 배열로 만들기

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

function solution(n) {
  let answer = [];
  n = String(n); // n을 문자열로 바꿔야 length()를 쓸수있다
  for (let i = n.length - 1; i >= 0; i--) {
    // for문을 배열의 뒤부터 돌린다
    answer.push(Number(n[i])); // n[i]값은 '문자열'이므로 숫자로 바꾼뒤 answer 배열에 넣는다.
  }
  return answer;
}

// 테스트
// let a = 5678;
// console.log(solution(a));
