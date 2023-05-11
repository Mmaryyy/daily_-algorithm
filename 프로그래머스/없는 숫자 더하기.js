function solution(numbers) {
  // 0 - 9사이에 없는 요소만 넣은 배열 만들기
  let num = [];
  for (let i = 1; i < 10; i++) {
    if (numbers.indexOf(i) === -1) {
      num.push(i);
    }
  }
  // num 요소의 합계 구하기
  return num.reduce((acc, cur) => acc + cur, 0);
}
console.log([5, 8, 4, 0, 6, 7, 9].sort());
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
