function solution(array, n) {
    // array 순회하면서 요소 - n 을 빼고
    // 계산값이 음수일 때 양수로 바꾸기
    // 가장 작은 차이값과 그 요소를 저장해두고
    // 저장해 둔 값보다 적은 차이값이 나타나면 교체
    
    let min = 0
    let gap = 0
    let closerNum = 0
    
    for (let i = 0; i < array.length; i++) {
        gap = Math.abs(array[i] - n)
        min = gap
        if (min > gap) {
            min = gap
            closerNum = el
        } else if (min === gap) {
            closerNum = closerNum < el ? closerNum : el
        }
        continue
    }
    
    return closerNum
}