function countAllCharacters(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 결과값을 담을 객체를 만들고
    // str을 순회하면서
    // 객체 키에 해당 요소가 있으면 값에 1을 더하고
    // 없으면 키를 생성한 후 1을 더한다
  
    let resultObj = {}
  
    for(let i = 0; i < str.length; i++) {
      if(resultObj[str[i]] === undefined) {
        resultObj[str[i]] = 0
      }
      resultObj[str[i]]++
    }
  
    return resultObj
  }
  