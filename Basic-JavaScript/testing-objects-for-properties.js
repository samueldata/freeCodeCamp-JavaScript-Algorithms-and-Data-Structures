function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}
const obj ={pet: "kitten", bed: "sleigh"}; // este aqui é o objeto
console.log(checkObj(obj, "gift")); // aqui chamamos a função que verifica se existe a propriedade "gift" dentro do objeto atraves da função acima.