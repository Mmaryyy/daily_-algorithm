function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    // n개 만큼 우측으로 이동한 것을
    // 다시 n개 만큼 좌측으로 옮긴 문자열을 반환
    // 만약에 str의 범위를 벗어난다면 어디로 갈지 정해줘야 함
    // secret -> 3, b라면. 
    // [2] -> length - 1 => i - secret + 1
    // [1] -> length - 2 
    // [0] -> length - 3 

    const alpabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for (let i = 0; i < str.length; i++) {
        let indexOfLetter = alpabet.indexOf(str[i]) // 입력된 문자의 alpabet에서의 인덱스
        if (indexOfLetter === -1) {
            result += ' '
            continue
        } else if (indexOfLetter < secret) {
            result += alpabet[alpabet.length - secret + indexOfLetter]
        } else {
            result += alpabet[indexOfLetter - secret]
        }
    }
    return result
}


    console.log(decryptCaesarCipher('nzop delepd dfaazced jzf', 11))