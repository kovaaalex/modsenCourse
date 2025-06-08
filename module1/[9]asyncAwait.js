async function multipleApis(urls){
    try {
        const results = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));
        return results.flat();
    } catch (error) {
        return console.error('Ошибка при загрузке API', error);
    }
    
}
const URLS = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/todos/1'
]
multipleApis(URLS).then(data => console.log(data));