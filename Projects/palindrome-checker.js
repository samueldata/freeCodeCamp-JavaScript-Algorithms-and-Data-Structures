function palindrome(str) {
  var str = str.toLowerCase();
  // let arrReverse = [];
  const regex = /[^A-Za-z0-9]/g;
  str = str.replace(regex, '');
  console.log(str);
  let arrReverse = str.split("").reverse();
  // console.log(arrReverse)
  let arrStr = str.split('');
  // console.log(str);
  str = arrStr.join("");
  let strRev = arrReverse.join('');
  // console.log(strRev);

  // arrReverse.reverse();
  if (str === strRev) {
  return true;
  } else {
    return false;
  }
}
// palindrome("A man, a plan, a canal. Panama");
console.log(palindrome("A man, a plan, a canal. Panama"));