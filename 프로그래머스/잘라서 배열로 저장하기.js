function solution(my_str, n) {
    // my_str를 쪼갠 요소 변수 하나 설정하고
    // 길이가 n이 될 때까지 담음 -> 이걸 answer 배열에 담음 slice
    // length 넘어가면 길이까지만 자름

    const result = []
    for (let i = 0; i * n < my_str.length; i++) {
        result.push(my_str.slice(i*n, (i+1)*n))
    }

    return result
}

console.log(solution("abc1Addfggg4556b", 6))
// ["abc1Ad", "dfggg4", "556b"]
// 0~5, 6~11, 12~17