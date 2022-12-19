// function superIncreasing(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 순회하면서
//     // i번째 요소가 앞번까지의 요소들의 합보다
//     // 큰지 확인
//     let result = ''
//     let newArr = []
  
//     for(let i = 1; i < arr.length; i++) {
//       newArr = arr.slice(0, i)
//       if(newArr.reduce((acc, cur) => acc + cur, 0) > arr[i]) {
//         result = true
//       }
//       result = false
//     }
  
//     return result
//   }
// 필요없는 변수 선언 X, 반대조건 만났을 때 바로 리턴해서 순회 횟수 줄이기
// function superIncreasing(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 순회하면서
//     // i번째 요소가 앞번까지의 요소들의 합보다
//     // 큰지 확인
//     let newArr = []

//     for (let i = 1; i < arr.length; i++) {
//         newArr = arr.slice(0, i)
//         if (newArr.reduce((acc, cur) => acc + cur, 0) >= arr[i]) {
//             return false
//         }
//     }
//     return true
// }

function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 순회하면서
    // i번째 요소가 앞번까지의 요소들의 합보다
    // 큰지 확인
    let sum = 0

    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i - 1]
        if (sum >= arr[i]) return false
    }

    return true
}