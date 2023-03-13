function solution(str1, str2) {
    //* 2. 각 집합에서 원소가 같은 것을 추려내어 교집합을 만든다
    //* 3. 중복 원소를 제외하고 합집합을 만든다
    //* 4. 교집합 개수 / 합집합 개수 * 상수(65536)를 곱하고 소수점 아래를 버리고 출력한다.
    
    const constant = 65536
    
    const getSet = (str) => {
        //* 1. 입력된 문자열은 각각 2글자씩 끊어서 집합으로 만든다.
        let array = []
        //* 다중집합의 원소의 비교는 대소문자를 구분하지 않는다(원소로 만들때 소문자 또는 대문자로 변환하여 입력한다.)
        const lowerStr = str.toLowerCase()
        const onlyEng = /[a-z]/g
        for (let i = 1; i < lowerStr.length; i++) {
            let ele = ''
            ele += lowerStr[i - 1] + lowerStr[i]
            //* 각 원소의 구성은 영문으로만 이루어지고 공백이나, 숫자, 특수문자가 포함되면 집합의 원소가 될 수 없다.
            if (ele.replace(onlyEng, '').length === 0) {
                array.push(ele)
            }
        }
        
        return array
    }
    const array1 = getSet(str1).sort()
    const array2 = getSet(str2).sort()
    // 두 집합이 모두 공집합일 때
    if (array1.length === 0 && array2.length === 0) return 1 * constant
    // 두 집합이 같을 때
    if (String(array1) === String(array2)) return 1 * constant
    const getCount = (arr) => {
        const count = {}
        arr.forEach(ele => {
            count[ele] = (count[ele] || 0) + 1
        })
        return count
    }
    const getUnionLength = (arr1, arr2) => {
        const obj1 = getCount(array1)
        const obj2 = getCount(array2)
        const union = {}
        for (ele of new Set([...Object.keys(obj1),...Object.keys(obj2)])) {
            // obj2에 원소가 있으면 큰 값으로 남김
            union[ele] = Math.max(obj1[ele] || 0, obj2[ele] || 0) 
        }
        return Object.values(union).reduce((acc,cur) => acc + cur, 0)
    }
    const getInterSectionLength = (arr1, arr2) => {
        const obj1 = getCount(array1)
        const obj2 = getCount(array2)
        const interSection = {}
        for (ele of new Set(array1.filter(el => array2.includes(el)))) {
            // obj2에 원소가 있으면 큰 값으로 남김
            interSection[ele] = Math.min(obj1[ele] || 0, obj2[ele] || 0) 
        }
        return Object.values(interSection).reduce((acc,cur) => acc + cur, 0)
    }
    console.log(array1)
    return parseInt(getInterSectionLength(array1, array2) / getUnionLength(array1, array2) * constant) 
}
