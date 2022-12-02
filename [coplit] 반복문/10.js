function makeMultiplesOfDigit2(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    // 1. num1 > num2 경우에
    // num2부터 num1까지 순회하면서
    // 2로 나눈 나머지가 0일 때 카운트를 더한다
    // 2. num2 > num1 경우에
    // num1부터 num2까지 순회하면서
    // 2로 나눈 나머지가 0일 때 카운트를 더한다
    // 예외 처리-> 작은수가 0이면 2의 배수가 아니다.
  
    let count = 0
    // max / min 정해 놓고 for문 하나만 돌리기! -> 리팩토링
    // if(num1 === 0 || num2 === 0) {}
    let min = num1
    let max = num2
    
    if(num1 >= num2) {
        max = num1
        min = num2
    }
    console.log('max ->' + max)
    console.log('min ->' + min)

    for(let i = min; i <= max; i++) {
      if(i % 2 === 0 && i !== 0) {
        count++
      }
    }
    
    return count
  }