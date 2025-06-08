class Employee {
    constructor(name, salary){
        this._namename = name;
        this._salary = salary;
    }
    countYearSalary() {
        return this._salary * 12;
    }
}
class Manager extends Employee {
    constructor(name, age, department){
        super(name, age);
        this._department = department;
    }
    countYearSalary() {
        return this._salary * 12 + 5000;
    }
}
const employee = new Employee('Vlad', 1000);
console.log(employee.countYearSalary());
const manager = new Manager('Alex', 1000, 'manager');
console.log(manager.countYearSalary());