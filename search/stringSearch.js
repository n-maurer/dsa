// O(N^2) Time complexity
function stringSearch1(string, searchWord) {
    for (let i = 0; i < string.length - searchWord.length; i++) {
        let currentWord = "";
        for (let j = 0; j < searchWord.length; j++) {
            currentWord = currentWord.concat("", string[i + j]);
        }
        if (currentWord === searchWord) {
            return true;
        }
    }
    return false;
}
console.log(stringSearch1("I love it here", "love"));

// O(mn) time complexity
function stringSearch2(string, searchWord) {
    let word = "";
    for (let j = 0; j < searchWord.length; j++) {
        word = word.concat(string[j]);
    }
    for (let i = searchWord.length; i < string.length; i++) {
        if (word === searchWord) {
            return true;
        }
        word = word.substring(1);
        word = word.concat(string[i]);
    }
    return false;
}

console.log(stringSearch2("I love it here", "love"));
