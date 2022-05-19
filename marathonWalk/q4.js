// 두 정수 사이의 합

// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// 제가 푼건아니고 가우스 공식을 활용한 기가막힌 풀이법 입니다.
// 매개변수 a 에서 b 까지의 정수를 더해야 하므로 가우스 공식에 대입하여 풀 수 있습니다.
// 대신 a와 b의 대소관계가 정해져있지 않으니 Math.abs() 를 이용해 절대값을 추출합니다.
// 정말 감탄한 풀이법입니다만, 자바스크립트 초보인 저는 Math 메서드에 대해
// 몰랐기 때문에 배우는 기회가 됐습니다.
