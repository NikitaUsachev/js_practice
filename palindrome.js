function isPalindrome(str) {
  const newStr = str.split("").reverse().join("");
  return str.toLowerCase() === newStr.toLowerCase();
}

console.log(isPalindrome("121")); // true
console.log(isPalindrome("boob")); // true
console.log(isPalindrome("true")); // false
