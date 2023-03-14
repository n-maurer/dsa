function linearSearch(arr, target) {
    for (let i in arr) {
        if (arr[i] === target) return parseInt(i);
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
