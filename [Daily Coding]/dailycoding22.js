function fibonacci(n) {
    const fib = [0, 1]
    const findFib = (n) => {
     if (fib[n] !== undefined) {
         return fib[n]
     }
     fib[n] = findFib(n-2) + findFib(n-1)
     return fib[n]
    }
    return findFib(n)
 }