// Theres gotta be a better way to do this
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);
//     while (left < right - 1) {
//         if (arr[middle] === target) {
//             return middle;
//         }
//         if (arr[left] === target) {
//             return left;
//         }
//         if (arr[right] === target) {
//             return right;
//         }
//         if (target < arr[middle]) {
//             right = middle;
//             middle = Math.floor((left + right) / 2);
//         }
//         if (target > arr[middle]) {
//             left = middle;
//             middle = Math.floor((left + right) / 2);
//         }
//     }
//     return -1;
// }
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

//                                 l  r
//                        0  1  2  3  4
console.log(binarySearch([1, 2, 3, 4, 5], 5));
