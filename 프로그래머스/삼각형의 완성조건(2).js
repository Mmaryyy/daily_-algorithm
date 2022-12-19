function solution(sides) {
    // sides = [side1, side2] 일때
    // 나머지 한 변이 될 수 있는 정수의 갯수
    // 1. 나머지 한 변이 가장 긴 변이 될 경우 ->  side3 < side1 + side2
    // 2. sides 중 큰 수가 가장 긴 변이 되는 경우 -> side2 < side1 + side3
    
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    
    let count = 0
    
    // 배열 안에 가장 긴 변이 있고, 그게 max 일 때
    while (min + count < max) count++
    
    // 새로운 변이 가장 긴 변이 될 때
    while (min + max < count) count++
    
    
    return count
}