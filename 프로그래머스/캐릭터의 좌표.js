function solution(keyinput, board) {
    // x, y 좌표를 각각 이동할 함수 만들기
    const point = {
        x: 0,
        y: 0,
        moveX: function (max, input) {
            if (input === 'up' || input === 'down') return 
            const move = input === 'right' ? 1 : -1
            if (Math.abs(this.x + move) > max) return 
            // 이전까지 이동된 x의 좌표에서 현재 move에 따라 판단
            this.x = this.x + move
        },
        moveY: function (max, input) {
            if (input === 'left' || input === 'right') return
            const move = input === 'up' ? 1 : -1
            if (Math.abs(this.y + move) > max) return
            this.y = this.y + move
        }
    }
    const [xRange, yRange] = board
    
    let xMax = parseInt(xRange / 2)
    let yMax = parseInt(yRange / 2)
    
    for (let input of keyinput) {
        // 방향키 입력마다 메소드 호출
        // 방향키 입력마다, x, y 좌표 변경
        point.moveX(xMax, input)
        point.moveY(yMax, input)
    }
    
    return [point.x, point.y]
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]))