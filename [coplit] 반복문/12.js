function getMaxNumberFromString(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 순회하면서
    // 나와 앞 번호를 비교해서
    // 큰 숫자를 저장해두고
    // 저장된 값을 리턴
    // 예외 -> 빈 문자열이면 0 리턴
  
    let maxNum = '0'
  
    if(str.length === 0) return maxNum
    for(let el of str) {
      if(maxNum < el) {
        maxNum = el
      }
    }
    return maxNum
  }
  