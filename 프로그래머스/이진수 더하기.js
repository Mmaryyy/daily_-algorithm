function solution(bin1, bin2) {
    let bin1_10 = parseInt(bin1, 2)
    console.log(bin1_10)
    let bin2_10 = parseInt(bin2, 2)
    console.log(bin2_10)
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}

console.log(solution("1001", "1111"))