// 가운데 글자 가져오기

// 문제설명
// 단어 s의 가운데 글자를 반환하는 함수, solution 을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 제한사항
// s는 길이가 1 이상, 100 이하인 스트링입니다.

function solution(s) {
  let answer = '';
  if (s.length % 2 === 0) {
    // 매개변수 s 문자열의 길이가 짝수일 경우
    answer = s[s.length / 2 - 1] + s[s.length / 2]; // s의 길이를 2로 나누고 -1 문자열 첫번째는 s[0]이기 때문에
  } else {
    // 매개변수 s 문자열의 길이가 홀수일 경우
    answer = s[Math.floor(s.length / 2)]; // s의 길이를 2로 나누고 반올림하는 Math.floor 사용
  }
  return answer;
}
