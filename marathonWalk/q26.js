// 제일 작은 수 제거하기

// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
// solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔
// 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고,
// [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

function solution(arr) {
  let answer = [];
  if (arr.length === 1) {
    // 배열의 길이가 1, 즉 인덱스값이 하나일 경우
    answer = [-1]; // -1값 하나만 가진 배열 리턴
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    // indexOf로 배열내의 최소값을 찾은후 splice로 삭제
    // ...arr이 아니라 arr 로 하면 최소값이 아니라 배열의 가장 뒷 값이 삭제됨. 왜?
    answer = arr;
  }
  return answer;
}

// 테스트;
// let a = [2, 4, 5, 6, 7];
// let b = [3];
// console.log(solution(a));
// console.log(solution(b));
