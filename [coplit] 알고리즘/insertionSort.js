const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        // 1번째 index부터 비교를 시작하고, 이때는 0번째 인덱스를 정렬된 배열로 간주하여 비교한다.
        let cur = array[i]
        let left = i - 1

        while (left >= 0 && array[left] > cur) {
            // '이미' 정렬된 배열 중 비교할 요소와 현재 요소의 관계가 조건과 같을때 교환이 일어난다
            array[left + 1] = array[left]
            left--
        }
        array[left + 1] = cur
        console.log(`${i}회전: ${array}`)
        // 1회전: 4, 5, 3, 2, 1
        // 2회전: 3, 4, 5, 2, 1
        // 3회전: 2, 3, 4, 5, 1
        // 4회전: 1, 2, 3, 4, 5
    }
    return array
}
console.log(insertionSort([5, 4, 3, 2, 1])) // [ 1, 2, 3, 4, 5 ]

// const insertionSort = function (arr, transform = (item) => item) {
//     let sorted = [arr[0]];
//     for (let i = 1; i < arr.length; i++) {
//         if (transform(arr[i], sorted[i - 1])) {
//             sorted.push(arr[i]);
//         } else {
//             for (let j = 0; j < i; j++) {
//                 if (!transform(arr[i], sorted[j])) {
//                     const left = sorted.slice(0, j);
//                     const right = sorted.slice(j);
//                     sorted = left.concat(arr[i], right);
//                     break;
//                 }
//             }
//         }
//     }

//     return sorted;
// };

// console.log(insertionSort([5,4,3,2,1]))