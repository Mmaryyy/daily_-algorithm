function solution(cacheSize, cities) {
    // 도시이름은 대소문자 구분을 하지 않는다
    // 도시이름 배열을 순회하면서
    // cacheSize 만큼 cache통에 담고
    // 도시 이름이 cache에 있으면 cache hit: runtime + 5, 없으면 cache miss: runtime + 1
    // cache는 가장 최근의 값으로 교체한다
    
    let runtime = 0
    let i = 0
    let city = cities.map(el => el.toLowerCase())
    let cacheCase = []
    while (i < city.length) {
        if (cacheCase.indexOf(city[i]) === -1) {
            runtime += 5
            cacheCase.push(city[i])
            if (cacheCase.length > cacheSize) {
                cacheCase.shift()
            }
        } else {
            runtime += 1
            cacheCase.splice(cacheCase.indexOf(city[i]), 1)
            cacheCase.push(city[i])
        }
        i++
    }
    return runtime
}