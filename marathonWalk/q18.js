// 서울에서 김서방 찾기

// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') return `김서방은 ${[i]}에 있다`;
  }
}
// for문으로 seoul의 길이만큼 반복한뒤 seoul의 i번째 인덱스값이 'Kim'이민
// `김서방은 인덱스위치값 에 있다` 를 반환

// 테스트
// const city = ['Jane', 'Kim'];
// console.log(solution(city));
