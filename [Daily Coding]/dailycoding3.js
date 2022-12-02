function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 반복문(while)문을 사용해야 합니다.
    // 2의 0승은 1입니다.
    // Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
    // num이 2의 거듭제곱이려면
    // 1. 나머지가 0이 될때까지 그 몫이 계속해서 2로 나누어 떨어져야 하고
    // 2. 더 이상 2로 나누어지지 않을때 나머지가 0이어야 한다


    while(num % 2 === 0) {
        num = num / 2
    }
    if(num === 1) {
        return true;
    }
    return false;
  }