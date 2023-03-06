function areThereDuplicates() {
    let argCounter = {};
    for (let arg of arguments) {
        // console.log(arg);
        argCounter[arg] = (argCounter[arg] || 0) + 1;
    }
    for (let key in argCounter) {
        if (argCounter[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
