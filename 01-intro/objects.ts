//#region  - Objects
// define a object
var userObejct = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    isAdult: true,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
// use userObject in a function
function printUser(user) {
    console.log(user.firstName + " " + user.lastName + " is " + user.age + " years old.");
}
printUser(userObejct); // John Doe is 20 years old.

// use userObject in a class
var UserCls = /** @class */ (function () {
    function UserCls() {
    }
    UserCls.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return UserCls;
}());
var userClass = new UserCls();
userClass.firstName = "John";
userClass.lastName = "Doe";
userClass.age = 20;
userClass.isAdult = true;
console.log(userClass.getFullName()); // John Doe
//#endregion  - Objects