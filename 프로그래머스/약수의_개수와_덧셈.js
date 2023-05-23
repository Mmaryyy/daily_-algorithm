function solution(left, right) {
  let answer = 0;

  // 숫자의 약수 갯수를 구하고
  const getAliquot = (num) => {
    let count = 0;
    let i = 1;
    while (i <= Math.sqrt(num)) {
      if (num % i === 0) {
        count++;
        if (num / i !== i) count++;
      }
      i++;
    }
    return count;
  };
  for (let i = left; i <= right; i++) {
    // 그렇지 않으면 answer에서 숫자를 뺀다
    if (getAliquot(i) % 2) {
      answer -= i;
      continue;
    }
    // 그 약수의 갯수가 짝수면 answer에 숫자를 더하고
    answer += i;
  }
  return answer;
}

console.log(solution(13, 17));
