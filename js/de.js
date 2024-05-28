function decryptText() {
    const encryptedText = document.getElementById('encryptedText').value;
    const shift = 3; // Shift for Caesar Cipher
    let decryptedText = '';

    // Define a set of symbols that were added
    const symbols = '!@#$%^&*()';

    for (let i = 0; i < encryptedText.length; i++) {
        let char = encryptedText[i];
        
        // Ignore symbols
        if (symbols.indexOf(char) !== -1) {
            continue;
        }

        if (char.match(/[a-z]/i)) {
            // Alphabetic characters
            let code = encryptedText.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        } else if (char.match(/[0-9]/)) {
            // Numeric characters
            let code = encryptedText.charCodeAt(i);
            char = String.fromCharCode(((code - 48 - shift + 10) % 10) + 48);
        }

        decryptedText += char;
    }

    document.getElementById('decryptedText').value = decryptedText;
}
