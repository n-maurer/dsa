function power(num, pow) {
    if (pow === 0) {
        return 1;
    }
    return num * power(num, pow - 1);
}

console.log(power(2, 4));

// 1 * 2 * 2 * 2 * 2
