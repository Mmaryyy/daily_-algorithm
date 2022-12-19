function solution(s) {
    // 문자열 순회하면서 1번만 나타나는 문자열을 새로 담고
    // 내림차순으로 정렬하여 리턴
    // hello -> heo -> eho
    
    let obj = {}
    let result = []
    
    for (let el of s) {
        if (!obj[el]) {
            obj[el] = 0
        }
        obj[el]++
    }
    console.log(obj)
    for (let char in obj) {
        if (obj[char] === 1) {
            result.push(char)
        }
    }
    
    return result.sort().join('')
}