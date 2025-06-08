function generateRandom(){
    return Math.ceil(Math.random() * 10);
}
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = generateRandom();
        console.log(number);
        if(number >= 1 && number <= 5)
            resolve('Число от 1 до 5')
        else reject(new Error('Ошибка: число от 6 до 10'));
    }, 
    2000)
})
pr.then(result => console.log(result))
.catch(err => console.error(err));
