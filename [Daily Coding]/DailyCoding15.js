function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 순회하면서
    // i번째 요소가 앞번까지의 요소들의 합보다
    // 큰지 확인
    let sum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        console.log(sum)
        sum = sum + arr[i - 1]
        console.log(sum)
        console.log(arr[i])
        if (sum < arr[i]) {
            return true
        } else {
            return false
        }
    }
}

superIncreasing([-2123, 843, -733, 1156, -919])