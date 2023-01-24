function solution(quiz) {
    // x[연산자]y = z 형태의 문자열 배열 quiz를 입력받아
    // 수식의 옳고 그름에 따라 o, x 로 담긴 배열 출력
    // quiz를 map 한다
    // 

    return quiz.map((el) => {
        // el은 문자열 전체
        // 각 수식으로 재가공
        console.log(el.split(' '))
        let [x, operator, y, equal, result] = el.split(' ')
        if (operator === '+') {
            if (parseInt(x) + parseInt(y) === parseInt(result)) return 'O'
            return 'X'
        } else {
            if (parseInt(x) - parseInt(y) === parseInt(result)) return 'O'
            return 'X'
        }
    })
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]))