function solution(num) {
  let count = 0;
  let number = num;

  // 예외처리 1. num === 1 return 0
  if (num === 1) return 0;

  while (number !== 1 && count < 500) {
    count++;

    // num이 짝수면 2로 나누고
    if (number % 2 === 0) {
      number = number / 2;

      // num이 홀수면 4을 곱하고 1을 더한다
    } else {
      number = number * 3 + 1;
    }

    if (number === 1) {
      break;
    }
  }

  // 예외처리 2. 카운트가 500번을 넘어가면 -1을 반환하고 종료
  return count >= 500 ? -1 : count;
}

console.log(solution(626331));
