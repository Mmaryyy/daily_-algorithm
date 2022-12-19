function numberSearch(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 문자열 순회, isNaN(value) -> 문자열 내부 값을 판별, boolean으로 반환
    // -> 0 - 9 까지의 숫자를 배열로 만들어 두고 includes 사용
    // 문자열 순회, split해서 공백, 숫자 빼기

    let sumOfNum = 0
    let onlyChar = []

    if (str.length === 0) return 0
    for (let el of str) {
        if (!isNaN(el)) {
            sumOfNum += Number(el)
        } else if (isNaN(el) && el !== ' ') {
            onlyChar.push(el)
        }
    }
    return Math.round(sumOfNum / onlyChar.length)
}