//  이상한 문자 만들기

// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을
// 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로
// 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
  let answer = '';
  let words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase();
      } else {
        answer += words[i][j].toLowerCase();
      }
    }
    if (i < words.length - 1) {
      answer += ' ';
    }
  }
  return answer;
}

// 풀이과정
// 1.문자열 s 를 split()으로 나누어 변수 words에 담아준다.
// 예시를 기준으로 words[0]은 try, words[1]은 hello, words[2]는 world가 된다.

// 2.각 단어별로 반복문을 돌리며, 짝수일때 (2로 나누어 몫이 0일 때) toUpperCase()를
// 사용해 대문자로 바꾸어준다. 홀수일때는 toLowerCase()를 사용해 소문자로
// 바꾸어준다.

// 3.단어 사이의 공백은 words의 길이를 활용한다.
// try hello world의 길이는 3이므로 1을 빼준 2보다 작을 때 공백을 넣어준다.
// 결국 2보다 작은 0번째인 try 뒤와 1번째인 hello뒤에 공백이 추가된다.

// 테스트
// console.log(solution('try hello world'));
