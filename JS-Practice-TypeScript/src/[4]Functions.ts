type Person = {
    name: string;
    age: number;
}
function processData(person: Person): string;
function processData(persons: Person[]): number;
function processData(person: Person | Person[]): string | number {
    if(Array.isArray(person)) return person.length;
    else return person.age + " " + person.name;
}