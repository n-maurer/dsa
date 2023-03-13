function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    let sum = arr[arr.length - 1];
    arr.pop();
    return sum * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 10]));
