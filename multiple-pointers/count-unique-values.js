function countUniqueValues(arr) {
    let i = 0;
    let end = arr.length - 1;
    for (let j = end; j > i; j--) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    if (i > 0) {
        return i + 1;
    }
    return i;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
