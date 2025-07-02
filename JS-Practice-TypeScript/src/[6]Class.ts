class Child {
    readonly age: number;

    constructor(age: number) {
        this.age = age;
    }

    print() {
        console.log(this.age);
    }
}

const older = new Child(20);
older.print();