function areThereDuplicates() {
    let argCounter = {};
    for (let arg of arguments) {
        console.log(arg);
        if (arg in argCounter === true) {
            return true;
        } else {
            argCounter[arg] = 1;
        }
        console.log(argCounter);
    }
    return false;
}

areThereDuplicates(1, 2, 3, 1);
