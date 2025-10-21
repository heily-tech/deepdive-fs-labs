"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim'];
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// ReadOnly Array
let stringArray = ['A', 'B', 'C'];
let numberArray = [1, 2, 3];
// stringArray.push('D');
// numberArray[0] = 4;
// Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a'];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);
let users;
users = [[1, 'John'], [2, 'Doe']];
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = false;
// let string1: string = unknown;
let string2 = unknown;
// object
let obj = {};
let arr = [];
// let nul: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    // description: 'description1'
};
// union
let union;
union = 'hi';
union = 3;
// union = [];
// union = false;
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// null, undefined
let number1 = undefined; //strictNullChecks = false
let string3 = null;
let object = undefined;
let array = null;
let undefined1 = null;
// void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
// never.push(1);
