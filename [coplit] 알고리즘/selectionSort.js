const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j
            }
        }
        if (min !== i) {
            // 참조 자료형의 값 교환
            [array[i], array[min]] = [array[min], array[i]]
            console.log(`${i}회전: ${array[min]}과 ${array[i]} 교환하기`)
        }
    }
    
    return array
}

console.log(selectionSort([2, 99, 7, 1, 5]))