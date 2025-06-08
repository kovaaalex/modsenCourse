console.log(myVar); // undefined
myVar = 10;
console.log(myVar); // 10
var myVar;
console.log(myVar); // 10


// console.log(myLet); //ReferenceError, cannot access myLEt before initialiazation
let myLet = 15
console.log(myLet);

// console.log(myConst); //ReferenceError, cannot access myLEt before initialiazation
// const myConst; //SyntaxError Missing initializer in const declaration
const myConst = 20;
console.log(myConst);
