function solution(emergency) {
    const ordered = [...emergency]
    ordered.sort((a,b) => b - a)
    console.log(emergency)

    //내림차순으로 정렬된 배열의 인덱스 + 1 을 요소로 가지는 배열
    let result = []
    for(let i = 0; i < emergency.length; i++) {
        for(let j = 0; j < ordered.length; j++) {
            if(emergency[i] === ordered[j]) {
                result.push(j + 1)
            }
        }
    }
    return result
}