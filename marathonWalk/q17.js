// 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼 있는지
// 확인해주는 함수, solution을 완성하세요. 예를들어,
// s가 'a234'이면 False를 리턴하고
// s가 '1234'라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1이상, 길이 8이하인 문자열입니다.

function solution(s) {
  if (s.match(/[a-z]/)) {
    // s문자열 안에 알파벳이 있는지 확인하는 메서드
    return false; // 알파벳 있으면 false
  } else if (s.length !== 4 && s.length !== 6) {
    // s문자열 길이가 4나 6이 아니면
    return false; // false 리턴
  } else {
    return true; // 외에 모두 true 리턴
  }
}

// console.log(solution(`1234`)); 테스트
