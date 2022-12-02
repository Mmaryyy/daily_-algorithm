function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 0, 1을 가지고 있는 배열에
    // 1번째와 앞번째 값을 더한 값을 추가한 배열을 리턴한다
    // num까지
  
    let arr = [0, 1]
    
    if(num === 0) return [0]

    for(let i = 1; i < num; i++) {
      arr.push(arr[i-1] + arr[i])
    }
  
    return arr
  }