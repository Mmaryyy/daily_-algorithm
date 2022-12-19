function solution(age) {
    //변환할 알파벳은 그 알파벳 요소의 인덱스임
    const alpabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let ageStr = '' + age;
    let result = ''
    
    for(let i = 0; i < ageStr.length; i++) {
        console.log(ageStr[i])
        result += alpabet[ageStr[i]]
        }
    
    return result
}

console.log(solution(23))