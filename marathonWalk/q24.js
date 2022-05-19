// 정수 내림차순으로 배치하기

// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

function solution(n) {
  let answer = [];
  n = String(n); // 우선 n을 문자열화
  for (let i = 0; i < n.length; i++) {
    answer.push(n[i]); // n을 문자열화 후 각 숫자를 뽑아서 그대로 배열화
  }
  answer.sort(function (a, b) {
    // 내림차순이라는데 function 이름이 없는게 궁금 (콜백함수)
    return b - a;
  });
  return Number(answer.join(''));
} // join 안에 '' 를 넣으면 배열을 하나로 붙힌다(배열사이 쉼표 없애줌).
// 그 후 Number()로 숫자형으로 변환.(이 문제에선 ParseInt써도 동일.)

// 테스트
// console.log(solution(1354422267));

// ParseInt 와 Number의 차이점
// ParseInt : 문자열에서 정수만 뽑아줌, but 문자열이 숫자로 시작해야함
// Number : 문자열을 정수로 형변환 -> 문자열에 문자가있으면 NaN
// answer.sort((a, b) => b - a); 내림차순 함수 이렇게도 표현 가능하다고 합니다.
// 화살표 함수 아직 잘 모름
