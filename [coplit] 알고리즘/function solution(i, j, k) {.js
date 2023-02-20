function solution(i, j, k) {
    let result = 0
    while (i <= j) {
        let ele = String(i)
        for (let e of ele) {
            if (e === String(k)) result++
        }
        i++
    }
    return result
}

console.log(solution(1, 13, 1))