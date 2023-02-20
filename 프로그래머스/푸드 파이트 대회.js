function solution(food) {
    let result = ''
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < parseInt(food[i]/2); j++) {
            result += i
        }
    }
    return result + 0 + result.split('').reverse().join('')
}

console.log(solution([1, 3, 4, 6]))