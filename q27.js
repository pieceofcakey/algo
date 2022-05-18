// 콜라츠 추측
// 문제 설명
// 1937년 Collatz란 사람에 의해 제기된 이 추측은,
// 주어진 수가 1이 될때까지 다음 작업을 반복하면,
// 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어
// 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수,
// solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면
// –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8000000 미만인 정수입니다.

function solution(num) {
  for (let i = 0; i < 500; i++) {
    if (num != 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return i;
    }
  }
  return -1;
}

// 테스트
// console.log(solution(6));

// 삼항연산자 대신 else if로 풀어쓰면
function solution(num) {
  for (let answer = 0; answer < 500; answer++) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num === 1) {
      return answer;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// 테스트
// console.log(solution(16));
