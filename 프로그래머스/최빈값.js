function solution(array) {
    var answer = 0;
    const obj = {}
    
    for(let el in array) {
        console.log(el)
        if(!el in obj) {
            obj[el] = 0
        }
        obj[el]++
    }
    return answer;
}