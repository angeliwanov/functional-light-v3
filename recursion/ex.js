"use strict";

function isPalindrome(word) {
  if (word.length <= 1) return true;
  if (word[0] == word[word.length -1]) return isPalindrome(word.slice(1,-1))
  return false
}

console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
