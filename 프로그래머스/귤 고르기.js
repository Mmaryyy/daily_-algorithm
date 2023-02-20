function solution(k, tangerine) {
    // 같은 사이즈의 귤 갯수 정보 담은 객체 만들고
    // 갯수가 많은 순으로 오름차순 정리
    // 갯수를 더해서 k와 같아지면 종류를 체크한 배열의 길이 리턴
    let answer = []
    let sizeGroup = {}
    
    for (let size of tangerine) {
        console.log(size)
        if (!sizeGroup[size]) {
            sizeGroup[size] = 0
        }
        sizeGroup[size] += 1
    }
    
    console.log(sizeGroup)
    
    const sort = Object.entries(sizeGroup).sort(([, a], [, b]) => b - a)
    console.log(sort)
    let amount = 0
    for (let tangerine of sort) {
        console.log(tangerine)
        const [ size, num ] = tangerine
        if (amount < k) {
            amount += num
            answer.push(size)
        }
        else if (amount === k) break
    }
    

    return answer.length
}