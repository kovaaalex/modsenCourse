function firstUnique(str){
    for(let i = 0; i < str.length; i++) {
        if((str.slice(0, i) + str.slice(i + 1)).includes(str[i])) continue;
            else return str[i];
    }
}
console.log(firstUnique('aaaaaa'));