function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Shift for Caesar Cipher
    let encryptedText = '';

    // Define a set of symbols to add
    const symbols = '!@#$%^&*()';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        
        if (char.match(/[a-z]/i)) {
            // Alphabetic characters
            let code = inputText.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        } else if (char.match(/[0-9]/)) {
            // Numeric characters
            let code = inputText.charCodeAt(i);
            char = String.fromCharCode(((code - 48 + shift) % 10) + 48);
        }

        encryptedText += char;

        // Randomly add a symbol
        if (Math.random() < 0.3) { // 30% chance to add a symbol
            encryptedText += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }

    document.getElementById('encryptedText').value = encryptedText;
}
