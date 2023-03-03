function domainName(url) {
    let domain = "";
    let splitUrl = url.split("");
    let firstChunkIndexEnd = 0;
    let secondChunkIndexEnd = 0;
    let switchToNonAlphaNumeric = false;
    for (let i in splitUrl) {
        if (
            /^[a-z0-9]+$/i.test(splitUrl[i]) === false &&
            switchToNonAlphaNumeric === false
        ) {
            switchToNonAlphaNumeric = true;
        }
        if (
            switchToNonAlphaNumeric === true &&
            /^[a-z0-9]+$/i.test(splitUrl[i]) === true
        ) {
            firstChunkIndexEnd = i;
            switchToNonAlphaNumeric = false;
            break;
        }
    }

    for (let i = firstChunkIndexEnd + 1; i < splitUrl.length; i++) {
        console.log(splitUrl[i]);
    }
}
