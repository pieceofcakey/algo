// 직사각형 별찍기

// 문제설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// n과 m은 각각 1000 이하인 자연수입니다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const nums = data.split(' ');
  const n = Number(nums[0]),
    m = Number(nums[1]); //n은 가로, m은 세로값

  let rect = ''; //직사각형 변수 rect 선언 후 빈 문자열 할당

  for (let column = 0; column < m; column++) {
    //아래 반복문을 m(세로입력값) 만큼 반복
    for (let row = 0; row < n; row++) rect += '*'; // n(가로입력값) 만큼 반복해서 rect 할당값(빈 문자열)에 "*" 추가
    rect += '\n'; // \n은 줄을 바꾸라는 뜻
  }
  console.log(rect); // rect 변수에 할당된 문자열 출력
});
