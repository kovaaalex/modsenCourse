function sumFirstLastDigits(number){
    if(number.toString().length === 1) return number;
    return number % 10 + +number.toString()[0];
}
console.log(sumFirstLastDigits(1));