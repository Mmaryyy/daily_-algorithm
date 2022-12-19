function compressString(str) {
    // TODO: 여기에 코드를 작성합니다.
    
    let result = ''
    let data = ''
    let count = 1
    
    // 빈 문자열이면 빈 문자열 리턴
    if (str.length === 0) return result
    
    // 일단 문자열의 갯수와 종류 정보를 담은 문자열 새로 만들고
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] === str[i]) {
            count++
            console.log(count)
        } else {
            console.log(data)
            data += count + str[i]
            count = 1
        }
    }
    
    // 만약 1번째부터 시작해서 앞 요소가 3이상이면 그대로 리턴하고 (+=2)
    // 앞 요소가 2이하면 앞 요소만큼 요소를 반복해서 붙여넣기
    for (let i = 1; i < data.length; i += 2) {
        if (data[i - 1] >= 3) {
            result += data[i - 1] + data[i]
        } else {
            for (let j = 0; j < data[i - 1]; j++ ) {
                result += data[i]
            }
        }
    }
  
    return result
  }