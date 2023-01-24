function solution(a, b) {
    // a,b의 최대공약수를 구한다
    // 최대공약수로 나눈 기약 분수 형태를 만들고
    // b(분모) 의 약수가 2, 5 외에 있는 경우에는 2를 리턴
    // 그렇지 않으면 1을 리턴한다
    // 최대공약수 -> greatest common denominator

    const getGCD = (a, b) => {
        let gcd = 1
        for (let i = 2; i <= Math.min(a, b); i++) {
            if (a % i === 0 && b % i === 0) {
                gcd = i
            }
        }
        return gcd
    }

    // 최대 공약수로 나눈 분모를 소인수 분해 하기
    const primeFac = []
    let idx = 2
    b = b / getGCD(a, b)
    
    while (b !== 1) {
        if (b % idx === 0) {
            primeFac.push(idx)
            b /= idx
            idx = 2
        } else {
            idx += 1
        }
    }
    return primeFac.filter(el => el !== 2 && el !== 5).length === 0 ? 1 : 2
}

console.log(solution(12,21))