/*Reverse a String
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh". */
function reverseString(str) {
 let reversedStr = "";
 for (let i = str.length - 1; i >= 0; i--) {
   reversedStr += str[i]
 }
 return reversedStr;
}

reverseString("hello");