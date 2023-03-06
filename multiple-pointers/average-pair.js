function averagePair(lst, target) {
    let start = 0;
    let end = lst.length - 1;
    while (start < end) {
        let avg = (lst[start] + lst[end]) / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
//                       i
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
//                                             j
