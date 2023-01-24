const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    // 만나는 값이 target 보다 크면 우측, 작으면 좌측으로 움직여야 함
  
    let left = 0, right = arr.length -1

    while (left <= right) {
        let middle = parseInt((right + left) / 2)
        if (arr[middle] === target) return middle 

        if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1
};

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2))