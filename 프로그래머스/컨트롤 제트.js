function solution(s) {
    const array = s.split(' ')
    console.log(array)
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Z') {
        // 순회하며 만난 요소가 Z면 이미 더해진 앞 요소를 빼고
        // 다음 순번으로 넘어감
            result -= array[i-1]
            continue
        }
        result += parseInt(array[i])
    }

    return result
}

console.log(solution("-1 -2 -3 Z"))