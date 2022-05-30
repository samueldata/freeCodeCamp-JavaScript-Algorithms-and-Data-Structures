// Only change code below this line
let countArray = [];
function countdown(n){
    if (n < 1) {
    return [];
  } else {
    countArray.push(n);
    countdown(n - 1);
    return countArray;
  }
}

// countdown(2)
// console.log(countArray);

// Only change code above this line