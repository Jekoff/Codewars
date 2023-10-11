/*
Task
Coding in function topSecret, function accept 1 parameter:file. file is an 
encrypted string.

Encryption using the right shift 3. Your job is to decrypt the file and read
 the contents 
of the file, and then answer my three questions. If the answer is correct,
 you will pass the test. Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:

*/

// My Solution:

function topSecret(str){
    return str.split('').map(char => {
      if (char.charCodeAt() >= 68 && char.charCodeAt() <= 90) {
        return String.fromCharCode(char.charCodeAt() - 3)
      } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 67) {
        return String.fromCharCode(char.charCodeAt() + 23)
      } else if (char.charCodeAt() >= 100 && char.charCodeAt() <= 122) {
        return String.fromCharCode(char.charCodeAt() - 3)
      } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 99) {
        return String.fromCharCode(char.charCodeAt() + 23)
      } else {
        return char
      }
    }).join('')
  }
