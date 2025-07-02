'use strict';
function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return word.toLowerCase().split('').reduce((countOfVowels, letter) => vowels.includes(letter) ? ++countOfVowels : countOfVowels, 0);
}
console.log(countVowels('JNINH HININKjlj'));