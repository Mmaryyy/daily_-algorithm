function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    // 연이율은 2배가 될 때까지 반복한다
    // 원금 * 연이율이 원금의 2배가 되면 반복을 종료한다
    // ==> 이 말은 곧 연이율의 제곱이 2를 넘어서면 종료하면 된다
    // 한 번 반복될 때마다 햇수를 카운트 한다
    // 카운트 횟수를 리턴한다

    let count = 0
    let principal = 1

    for(let i = 0; principal < 2 * principal; i++) {
        principal = principal * interestRate / 100
        count++
    }
    return count
  }