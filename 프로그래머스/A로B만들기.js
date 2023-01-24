function solution(before, after) {
    // before 순회하면서
    // after 스트링 요소 하나씩 replace('')
    // after 스트링 길이가 0이 되면 1, 아니면 0

    for (let char of before) {
        after = after.replace(char, '')
    }

    if (after.length === 0) return 1
    return 0
}

console.log(solution("allpe", "apple"))