function solution(babbling) {
  // 배열을 순회하며 각 요소(스트링 형태)를 조카가 말할 수 있는 어휘 단위로 split
  // split 한다는 것 -> 이것을 쪼개는 것 -> 말할 수 없는 단어만 남음
  // 말할 수 있는 단어가 4개 -> 정규 표현식으로 묶어 표현
  // 원래 babbling의 길이에서 말할 수 없는 단어만 남은 배열의 길이를 뺀 값
  
  let unspeakableWord = []
  
  for (let el of babbling) {
      unspeakableWord.push(el.split(/aya|ye|woo|ma/).join(''))
  }
  return babbling.length - unspeakableWord.filter(ele => ele.length !== 0).length
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]))
console.log('leehyerim'.split('lee'))