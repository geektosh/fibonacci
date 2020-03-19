'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n) {
    if ( memo.has(n) ){
        return memo.get(n);
    // } else if ( n === 1 ){
    //     return 1;
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n,value);
    return value;
    // return fib(n-1) + fib(n-2);
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}