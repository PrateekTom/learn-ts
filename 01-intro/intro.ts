// Promitive types in TypeScript : number, string, boolean
var age = 20;
var firstName = "John";
var isAdult = true;

// Arrays
var names = ["John", "Jane", "Mark"];
var ages = [33, 28, 11];
var isAdults = [true, false, true];

// Tuple
var person = ["John", 20];
// person = [20, "John"]; // Error
// person[0] = 20; // Error
// person[1] = "John"; // Error

// Enum
enum Color { Red, Green, Blue };
var c: Color = Color.Green;
console.log(c); // 1

// Any
var randomValue: any = 10;
randomValue = true;

// Unknown
var myVariable: unknown = 10;
// myVariable = true; // Error
// myVariable = "John"; // Error

// Type inference
var a;
a = 10;
a = true;
// a = "John"; // Error

var b = 20;
// b = true; // Error
// b = "Jane"; // Error

// Union
var multiType: number | boolean;
multiType = 20;
multiType = true;
// multiType = "John"; // Error

// Functions
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(5, 10);
// add(5, "10"); // Error

// Optional parameters
function add2(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}

add2(5, 10);
add2(5);

// Default parameters
function add3(num1: number, num2: number = 10): number {
    return num1 + num2;
}

add3(5, 10);
add3(5);

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

var p = {
    firstName: "John",
    lastName: "Doe"
};

fullName(p);

// Classes
class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello ${this.employeeName}`);
    }
}

var emp1 = new Employee("John");
console.log(emp1.employeeName);
emp1.greet();

// Inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

var m1 = new Manager("Jane");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// Access modifiers
// public, private, protected
class Employee2 {
    private employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello ${this.employeeName}`);
    }
}

var emp2 = new Employee2("John");
console.log(emp2.employeeName); // Error
emp2.greet();

// Generics
function echo<T>(arg: T): T {
    return arg;
}

var myStr = echo("John");
var myNum = echo(1);
var myBool = echo(true);

// Built-in generics
var strArr: Array<string> = ["John", "Jane", "Mark"];

// Array helper methods
// map
var numArr = [1, 2, 3];
var numArr2 = numArr.map((value) => value * 2);
console.log(numArr2); // [2, 4, 6]

// filter
var numArr3 = numArr.filter((value) => value > 1);
console.log(numArr3); // [2, 3]

// reduce
var numArr4 = numArr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(numArr4); // 6

// Promises
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 1000);
});

promise.then((value) => {
    console.log(value);
}
);

// Async / Await
async function myFunc() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1000);
    });

    var result = await promise;
    console.log(result);
}

myFunc();

// Decorators
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person2 {
    constructor() {
        console.log("Hi");
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {
}

// Advanced
// Multiple decorators
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}

var plant = new Plant();
(<any>plant).print();

// Method decorator
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class Project {
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

var project = new Project("Super Project");
project.calcBudget();
// project.calcBudget = function() {
//     console.log(2000);
// }
project.calcBudget();

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`Target: ${target}`);
    console.log(`Method name: ${methodName}`);
    console.log(`Param index: ${paramIndex}`);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);

// Property decorator
function editable2(value: boolean) {

    return function (target: any, propName: string): any {
        var descriptor: PropertyDescriptor = {
            writable: value
        };

        return descriptor;
    }
}

class Project2 {
    @editable2(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    calcBudget() {
        console.log(1000);
    }
}

var project2 = new Project2("Super Project");
project2.calcBudget();
project2.calcBudget = function () {
    console.log(2000);
}
project2.calcBudget();
console.log(project2);

// Reflect metadata
function printInfo2(target: any, methodName: string, paramIndex: number) {
    console.log(`Target: ${target}`);
    console.log(`Method name: ${methodName}`);
    console.log(`Param index: ${paramIndex}`);
}

class Course2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo2 printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

// Polyfills
// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}

reset();
console.log(variable);

// Arrow functions
console.log("Arrow functions");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
}

console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;

console.log(multiplyNumbers(10, 3));

const greet2 = () => {
    console.log("Hello");
}

greet2();

const greetFriend = friend => console.log(friend);

greetFriend("Manu");

// Default parameters
console.log("Default parameters");
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }

    console.log("Done!", start);
}

countdown();

// Rest & spread
console.log("Rest & spread");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
    return args;
}

console.log(makeArray("Max", 1, 2, 6));

// Destructuring
console.log("Destructuring");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = { userName: "Max", age: 27 };
const { userName: myName, age: myAge } = userData;
console.log(myName, myAge);

// Template literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);

// Exercise 1
console.log("Exercise 1");
const double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2
console.log("Exercise 2");


const greet3 = (name: string = "Max"): void => console.log(`Hello, ${name}`);
greet3();
greet3("Anna");







