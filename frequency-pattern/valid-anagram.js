function validAnagram(firstWord, secondWord) {
    //make a frequency map of first word set to an empty object
    //make a freq map of second word set to an empty object
    //loop through first word, for every letter,
    //if letter is not in the freq map
    //add letter to freq map and set its value to 1
    //if letter is in freq map
    //add 1 to letter value
    //do same thing for second word
    //loop through freq map 1
    //for every key
    //check if freq map 2 of that same key matches
    //if not, return false
    //if it goes through whole thing ok,
    //return true
    let freqMap1 = {};
    let freqMap2 = {};
    for (let letter of firstWord) {
        freqMap1[letter] = (freqMap1[letter] || 0) + 1;
    }
    for (let letter of secondWord) {
        freqMap2[letter] = (freqMap2[letter] || 0) + 1;
    }
    for (let key in freqMap1) {
        if (freqMap1[key] !== freqMap2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("murder", "redrum"));
