// The Fibonacci sequence is a list of infinite numbers, each of which is the sum of the past two terms (starting with 1).
// Iterative method
function getNthFibonacci(n){
    if(n<=1) return n
    let sum =0
    let last =1
    let lastlast =0

    for(let i=1; i<n; i++){
        sum = last+lastlast
        lastlast = last
        last = sum
    }
  return sum
}

// recursive method
function getNthFibonacci(n, lastlast, last){
    if(n==0){
        return lastlast
    }
    if(n==1){
        return  last
    }
    return getNthFibonacci(n-1,last,lastlast+last)
}

console.log(getNthFibonacci(50, 0, 1))