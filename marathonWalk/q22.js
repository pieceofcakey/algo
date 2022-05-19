//  자릿수 더하기

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

function solution(n) {
  let answer = 0;
  let arr = String(n); // 정수n을 문자형화
  for (let i = 0; i < arr.length; i++) {
    // 문자형화된 n을 반복문으로 돌림
    answer += Number(arr[i]); // answer에 arr[i]인덱스값을 더해줌 (자릿수)
  }
  return answer;
}

// 테스트
// console.log(solution(987));
