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
    return str.replace(/[a-z]/gi, function(s){
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'd' ? 23 : -3));
    });
  } 
