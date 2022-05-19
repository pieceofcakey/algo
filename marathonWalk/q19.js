//  수박수박수박수박수박수?

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을
// 유지하는 문자열을 리턴하는 함수,
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고
// 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

// 풀이1
function solution(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += '박';
    } else {
      result += '수';
    }
  }
  return result;
}

// 풀이2
function solution(n) {
  return '수박'.repeat(n).substring(0, n); // substring(시작인덱스값, 마지막인덱스값)
  // substring() 은 시작인덱스값 부터 마지막 인덱스값 "바로 전" 까지 자름
}

//테스트
// console.log(solution(3));
