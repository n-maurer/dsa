function isSubsequence(word1, word2) {
    let start = 0;
    for (let letter in word2) {
        if (word2[letter] === word1[start]) {
            start++;
        }
        if (start === word1.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubsequence("hello", "hello world"));
