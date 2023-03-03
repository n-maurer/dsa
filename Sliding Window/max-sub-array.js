// function maxSubArraySum(n, arr) {
//     let maxSum = -Infinity;
//     let i = 0;
//     let j = i + (n - 1);
//     // console.log(arr[i] + arr[j]);
//     while (j < arr.length) {
//         let sum = 0;
//         for (let index = i; index <= j; index++) {
//             sum += arr[index];
//         }
//         if (sum > maxSum) {
//             maxSum = sum;
//         }
//         i++;
//         j++;
//     }
//     return maxSum;
// }

function maxSubArraySum(num, arr) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubArraySum(2, [1, 2, 5, 2, 8, 1, 5]));
