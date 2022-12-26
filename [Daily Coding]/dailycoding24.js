const isSubsetOf = function (base, sample) {
    // naive solution: O(M * N)
    // return sample.every((item) => base.includes(item));
  
    // 각 배열을 정렬: O(N * logN), O(M * logM)
    // N >= M 이므로, O(N * logN)
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);
    // 비교 횟수를 줄이기 위해 오름차순 정렬
    console.log(base)
    console.log(sample)

    const findItemInSortedArr = (item, arr, from) => {
        console.log(item)
        console.log(from)
      for (let i = from; i < arr.length; i++) {
        console.log(item)
        console.log(arr[i])
        if (item === arr[i]) {
        // 만약 sample의 요소가 base와 같으면 그 인덱스를 리턴
        // -> 오름차순 정리 해뒀기 때문에 다음 턴에 비교할 때 앞 전 요소의 인덱스 다음부터 비교해보면 됨
        // === 다음 요소는 무조건 앞 요소보다 큰 수(인덱스로 치면 뒷 순번에 있음)
            console.log(i)
            return i
        }
        
        else if (item < arr[i]) {
            console.log(item)
            console.log(arr[i])
        // base 끝까지 순회했는데 item이 마지막 요소보다 작으면 base에 없는거
        // sample의 요소 한 개라도 base에 없으면 포함되는 배열이 될 수 없음
            return -1;
        }
      }
      return -1;
    };

    let baseIdx = 0;
    for (let i = 0; i < sample.length; i++) {
      baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
      console.log(baseIdx)
      if (baseIdx === -1) return false;
    }
    return true;
  };

  let base = [1, 2, 3, 4, 6];
  let sample = [3, 7, 5];

console.log(isSubsetOf(base, sample))