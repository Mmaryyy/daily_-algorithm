function solution(numbers) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for (let i = 0; i < num.length; i++) {
        numbers = numbers.replace(`${num[i]}`, i)
    }
    return numbers
}

function solution(numbers) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for (let i = 0; i < num.length; i++) {
        numbers = numbers.split(num[i]).join(i)
    }
    return Number(numbers)
}
