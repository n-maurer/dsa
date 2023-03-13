function fib(num) {
    // add whatever parameters you deem necessary - good luck!
    if (num <= 2) {
        return 1;
    }
    num--;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(4, 1));
