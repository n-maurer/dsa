//takes in two parameters
//       lst -> array of positive integers
//       num -> positive integer
//      returns: minimal length of a contiguous subarray of which
//               the sunm is greater than or equal to num
//       edge cases: if there isnt one, return 0

function minSubArrayLen(lst, num) {
    let i = 0;
    let smallest = [];
    let smallestLength = Infinity;
    let currentSum = lst[i];
    let currentArr = [lst[i]];
    for (let j = 1; j < lst.length; j++) {
        if (currentSum >= num) {
            if (currentArr.length < smallestLength) {
                smallest = currentArr;
                smallestLength = currentArr.length;
                console.log("smallest", currentSum, smallest);
            }
            i = j - 1;
            currentArr = [lst[i]];
            currentSum = lst[i];
            if (currentSum >= num) {
                return currentArr;
            }
        }
        currentSum += lst[j];
        currentArr.push(lst[j]);
        console.log(currentSum);
        console.log(currentArr);
    }
    return smallest;
}

//                          i
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
//                             j
