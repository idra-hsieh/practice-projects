function rot13(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            let newCode = code + 13;
            if (newCode > 90) {
                newCode = newCode - 26;
            }
            result += String.fromCharCode(newCode);
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(rot13("SERR PBQR PNZC"));