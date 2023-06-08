//#region 01 - The Basics -Topics
// 01 - The Basics

// 02 - Variable Declarations
// 03 - Interfaces
// 04 - Classes
// 05 - Functions
// 06 - Generics
// 07 - Enums
// 08 - Type Inference
// 09 - Type Compatibility
// 10 - Advanced Types
// 11 - Symbols
// 12 - Iterators and Generators
// 13 - Modules
// 14 - Namespaces
// 15 - Namespaces and Modules
// 16 - Module Resolution
// 17 - Declaration Merging
// 18 - JSX
// 19 - Decorators
// 20 - Mixins
// 21 - Triple-Slash Directives
// 22 - Type Checking JavaScript Files
// 23 - Utility Types
// 24 - tsconfig.json
// 25 - Project References
// 26 - Compiler Options
// 27 - Emitting JavaScript
// 28 - Emitting Declaration Files
// 29 - Compiler Options in MSBuild
// 30 - Nightly Builds
// 31 - Using the Language Service API
// 32 - Using the Compiler API
// 33 - Using the Serverless Plugin
// 34 - Using the Babel Plugin
// 35 - Using the Webpack Loader
// 36 - Using the Rollup Plugin
// 37 - Using the Parcel Plugin
// 38 - Using the SystemJS Plugin
// 39 - Using the Gulp Plugin
// 40 - Using the Grunt Plugin
// 41 - Using the Brunch Plugin
// 42 - Using the Jest Plugin
// 43 - Using the Karma Plugin
// 44 - Using the ESLint Plugin
// 45 - Using the TSLint Plugin
// 46 - Using the Prettier Plugin
//#endregion 01 - The Basics

//#region 02 - Functions

// arrow functions
var defineSignature = (name: string, age: number): string => `${name} is ${age} years old`;
console.log(defineSignature("John", 20)); // John is 20 years old

// optional parameters
var addOptionalNumbers = (num1: number, num2?: number): number => {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(addOptionalNumbers(5, 10)); // 15

// default parameters
var addDefaultNumbers = (num1: number, num2: number = 10): number => num1 + num2;
console.log(addDefaultNumbers(5)); // 15

// rest parameters
var addRestNumbers = (num1: number, ...nums: number[]): number => {
    return nums.reduce((sum, num) => sum + num, num1);
}
console.log(addRestNumbers(5, 10, 20, 30)); // 65

// function overloading
function addOverloadedNumbers(num1: number, num2: number): number;
function addOverloadedNumbers(num1: string, num2: string): string;
function addOverloadedNumbers(num1: any, num2: any): any {
    return num1 + num2;
}
console.log(addOverloadedNumbers(5, 10)); // 15
console.log(addOverloadedNumbers("5", "10")); // 510

function Getcall(): void {
    console.log("hello");
}

function PushVisitor(funAlias: (code: string, nameOfVisitor: string, ageOfVisitor: number) => string) {
    console.log(funAlias("123", "John", 20));
}

var res = () => "hello";
PushVisitor(res);

//#endregion 02 - Functions
