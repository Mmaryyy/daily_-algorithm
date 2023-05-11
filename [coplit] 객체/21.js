function mostFrequentCharacter(str) {
  // 문자열 순회하면서 이전에 없던 문자 -> 0으로 객체에 추가하고
  // 이전에 있던 문자면 +1 함
  // 가장 큰 숫자를 변수에 하나 저장해놓고
  // 그 수보다 크면 그 값을 교체함
  // 순회를 마친 후 변수에 저장된 '문자'를 리턴
  const arr = str.split("").filter((el) => el !== " ");
  let obj = {};
  let frequent = "";
  let count = 0;

  for (char of arr) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
    if (count < obj[char]) {
      count = obj[char];
      frequent = char;
    }
  }

  return frequent;
}

console.log(mostFrequentCharacter("abcddcba"));
