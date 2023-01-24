function solution(score) {
    // 평균을 내는 함수를 만들고
    // 각 배열의 평균 점수로 이루어진 배열을 다시 정렬해서 등수(인덱스..가 될 수 없네)로 정렬된 새로운 배열
    // 값이 같으면 같은 값을 내보내야 함..

    const aveArr = score.map(([ english, math ]) => {
        return (english + math) / 2
    })
    
    let sortedArr = [...aveArr].sort((a,b) => b-a)
    
    return aveArr.map(el => sortedArr.indexOf(el) + 1)
}
const score = [[80, 70], [90, 50], [40, 70], [50, 80]]
console.log(solution(score))