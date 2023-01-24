function solution(my_string) {
    // split할 때 모든 알파벳을 split할 수 있도록 -> 정규 표현식
    // 대소문자 구문도 포함하도록
    
    return my_string.replace(/\D+/g, ' ')
}

console.log(solution("aAb10B2cC34oOp"))