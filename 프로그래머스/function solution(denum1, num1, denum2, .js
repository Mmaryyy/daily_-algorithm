function solution(denum1, num1, denum2, num2) {
    //denum1 * denum2 곱한 값이 분모
    //denum1 * num2 + denum2 * num1 이 분자
    //0부터 분모든 분자든 순회하면서
    //나누어지는 가장 큰 수를 구하고 -> 최대공약수
    //그 수로 나눈 것을 배열에 적절히 배치
    
   let bottomNum = num1 * num2
   let topNum = (denum1 * num2) + (denum2 * num1)
   let maxNum = 1

   for(let i = 1; i <= bottomNum; i++) {
       if(bottomNum % i === 0 && topNum % i === 0) {
           maxNum = i
       }
   }

    return [topNum / maxNum, bottomNum / maxNum]
}