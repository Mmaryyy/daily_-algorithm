function solution(numbers, k) {
    // 2k 보다 배열의 길이 X 배수가 커질 때까지 길게 만듬
    // -> 새 배열의 길이가 2k랑 같아질때까지 붙이기
    // 0번부터 2씩 인덱스 더해서
    // 거기 원소 가져와
    
    let newArr = []
    let result = 0

    const getNumberByIndex = i => {
        if (i >= numbers.length) {
            console.log(i % numbers.length)
            i = i % numbers.length
        }
        return numbers[i]
    }
    // 던질 사람 모아놓기
    for (let i = 0; newArr.length < 2 * k; i++) {
        console.log(getNumberByIndex(i))
        newArr.push(getNumberByIndex(i))
    }

    return newArr[newArr.length - 2]
    // 0번부터 2칸씩 뒤로 던져서 k-1번째 받는 사람 구하기
    // for (let i = 0; i < k; i+=1) {
    //     console.log(i)
    //     result = newArr[i * 2]
    // }

    // return result
}