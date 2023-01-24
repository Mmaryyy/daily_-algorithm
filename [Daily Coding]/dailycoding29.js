// // 나의 코드
// const rotatedArraySearch = function (rotated, target) {
//     // TODO : 여기에 코드를 작성합니다.
//     // 이진 탐색 해본다
//     // target 을 찾기위해 rotated 임의의 중간 값의 인덱스를 구하고
//     // 그 값보다 작으면 좌측, 크면 우측을 탐색한다
//     // 중간값 지정을 반복하며 탐색 횟수를 줄인다
//     // 최소값의 인덱스를 구하고 
//     console.log(rotated.indexOf(Math.min(...rotated)))
    
//     let start = target <= rotated[rotated.length-1] ? rotated.indexOf(Math.min(...rotated)) : 0
//     let end = target <= rotated[rotated.length-1] ? rotated.length - 1 : rotated.indexOf(Math.min(...rotated))

//     while (start <= end) {
//         mid = parseInt((start + end) / 2)

//         if (target === rotated[mid]) return mid
//         else {
//             if (target < rotated[mid]) end = mid - 1
//             start = mid + 1
//         }
//     }
//     return -1
// };

// referrence

const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
