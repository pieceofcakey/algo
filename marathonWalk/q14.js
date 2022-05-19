// 나누어 떨어지는 숫자 배열

// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 
// -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.


function solution(arr, divisor) {
    let answer = []
    for(let i = 0; i < arr.length; i++){ // 매개변수 arr의 길이만큼 for문 돌림
        if(arr[i] % divisor === 0){ // arr의 i번째 값이 나누어떨어지면
         answer.push(arr[i]); // answer 배열에 arr[i]값 푸쉬
        }
    }
    answer.sort(function(a, b){return a - b}) // sort로 오름차순 정렬
    if (answer.length === 0){ // answer 배열의 길이가 0일때, 즉 나누어떨어지는값이 없어서 answer배열에 push가 없을때
        answer.push(-1) // answer 배열에 -1 push
    }
    return answer // answer 배열 리턴
}