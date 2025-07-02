function identifyElement(element: string | number | object) {
    if(element === 'string') 
        console.log('Это строка');
    else if(typeof element === 'number')
        console.log('Это число')
    else if(typeof element === 'object')
        console.log('Это объект');
}
identifyElement(2)
identifyElement('2')
identifyElement({number: '2'})