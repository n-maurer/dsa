function maxSubarraySum(nums, len) {
    if (nums.length < len) return null;
    let j = 0;
    let maxSum = 0;
    for (let i = 0; i < len; i++) maxSum += nums[i];
    let currentSum = maxSum;
    for (let i = len; i < nums.length; i++) {
        currentSum -= nums[j];
        currentSum += nums[i];
        j++;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
