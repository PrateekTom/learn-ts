//#region  -Types
// define a type
type Person = {
    firstName: string;
    lastName: string;
    age: number;
    isAdult: boolean;
    getFullName(): string;
};
// define an object
var personObject: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    isAdult: true,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// define a class
class PersonCls {
    firstName: string;
    lastName: string;
    age: number;
    isAdult: boolean;
    constructor(firstName: string, lastName: string, age: number, isAdult: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = isAdult;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

// create an instance
var personClass = new PersonCls("John", "Doe", 20, true);



