function readVertically(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력받는 배열의 각 요소를 순회함
    // 요소를 하나의 문자열로 보고 각 요소마다 0번째 인덱스부터 추출하여 가져옴
  
    let result = ''
  
    const turnCnt = Math.max(...arr.map(ele => ele.length))

    for(let i = 0; i < turnCnt; i++) {
        for(let j = 0; j < arr.length; j++) {
            result += arr[j][i] || ''
        }
    }

    return result
  }