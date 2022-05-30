function randomRange(myMin, myMax) {
  // Only change code below this line
  let randomNumber;
  randomNumber = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return randomNumber;
  // Only change code above this line
}