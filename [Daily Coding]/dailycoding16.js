function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 대소문자 구분이 없기 위해 대문자 혹은 소문자로 변환하여 비교하기
    // 순회하며 각 요소와 같은 요소를 만나면 바로 false 리턴
    // 예외 -> str이 비어있으면 true 리턴
  
    if (str.length === 0) return true
    
    const newStr = str.toUpperCase()
  
    for (let i = 0; i < newStr.length; i++) {
      for (let j = i + 1; j < newStr.length; j++) {
        if (newStr[i] === newStr[j]) return false
      }
    }
  
    return true
  }

  isIsogram(dropOut)