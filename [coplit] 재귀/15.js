function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // array 순회하면서 까서 넣는다
    // 만약에 순회하면서 요소가 array면 또 깐다...
    let result = []
    for (let el of arr) {
        if (Array.isArray(el)) {
            result.push(...flattenArr(el))
        } else if (!Array.isArray(el)) {
            result.push(el)
        }
    }
    return result
}
console.log(flattenArr([1]))
console.log(flattenArr([1, [2], [3, [[[4]]]], 5, [6, [7, [8]]]]))
