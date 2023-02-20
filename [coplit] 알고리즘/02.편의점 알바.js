function partTimeJob(k) {
    // TODO: 여기에 코드를 작성하세요.
    // 거스름돈 = [1, 5, 10, 50, 100] -> 오름차순 정렬
    // 동전 개수를 최소화해서 거스름돈 k를 만들 때 필요한 동전의 총 갯수

    const coin = [1, 5, 10, 50, 100, 500]
    let change = k
    let count = 0
    
    for (let i = coin.length - 1; i >= 0; i--) {
        console.log(change)
        if (change === 0) break
        count += Math.floor(change/coin[i])
        change %= coin[i]
    }
    return count
}