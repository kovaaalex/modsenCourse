function sumOfArrayElementsInSquare(arr){
    if(!arr) return;
    return arr.reduce((startValue, el) => startValue + el * el, 0);
}
console.log(sumOfArrayElementsInSquare([1,2,3]));