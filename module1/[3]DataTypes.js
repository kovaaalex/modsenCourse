function sumFirstLastDigits(number){
    return number % 10 + +number.toString()[0];
}
console.log(sumFirstLastDigits(15));