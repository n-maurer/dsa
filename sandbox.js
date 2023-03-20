function rotateLeft(d, arr) {
    let i = 0;
    while (i < d) {
        let temp = arr[0];
        arr.shift();
        arr.push(temp);
        i++;
    }
    return arr;
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
