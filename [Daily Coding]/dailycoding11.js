function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 가장 짧은 문자열을 순회해서 알아내고
    // 가장 긴 문자열을 순회해서 알아내고
    // 문자열에서 위 문자열들을 삭제한 배열을 리턴함
  
    let shortWord = arr[0]
    let longWord = arr[0]
    let shortIdx = 0
    let longIdx = 0
    let result = []
  
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length <= shortWord.length) {
          shortWord = arr[i]
          shortIdx = i
        } else if(arr[i].length >= longWord.length) {
          longWord = arr[i]
          longIdx = i
        }
    }

    for(let i = 0; i < arr.length; i++) {
        if(i !== shortIdx && i !== longIdx) {
            result.push(arr[i])
        }
    }

    return result
    }
