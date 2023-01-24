function paveBox(boxes) {
    // TODO: 여기에 코드를 작성합니다.
    // 2개의 큐를 두고
    // 왔다 갔다 할 때마다 -1씩
    // 맨 앞(front)값이 0이 되면 순서대로 0이거나 0보다 작은 애를 꺼냄
    // 0이 아닌 애를 만나면 지금까지 나간 애들의 수를 result에 보관해둠
    // 뭉덩이로 나간 애들 수가 이전 result보다 높으면 result 값 갱신

    const queue = boxes.map(el => el - boxes[0])
    let result = 0
    let count = 0
    for (let i = 0; i < queue.length; i++) {
        console.log(count)
        if (queue[i] > 0) {
            count = 0
        }
        count++
    }

    return result
}

console.log(paveBox([5, 1, 4, 6, 3]))