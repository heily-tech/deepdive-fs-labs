// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6;
let float: number = 1.2345;

// String
let string: string
let firstName: string = 'Doe';

// Array
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> =['John', 'Kim'];

let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];
 
let someArray: any[] = ['John', 1, [], {}, false];

// Interface, Type

// ReadOnly Array
let stringArray: readonly string[] = ['A', 'B', 'C'];
let numberArray: ReadonlyArray<number> = [1, 2, 3];
// stringArray.push('D');
// numberArray[0] = 4;

// Tuple
let tuple1: [string, number]
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a'];

let tuple2: [string, number]
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);


let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']];

// any
let any: any = 'abc';
any = 1;
any = [];

// unknown
let unknown: unknown = false;
// let string1: string = unknown;
let string2: boolean = unknown as boolean;

// object
let obj: object = {};
let arr: object = [];
// let nul: object = null;
let date: object = new Date();

const obj1: {id: number, title: string} = {
    id: 1,
    title: 'title1',
    // description: 'description1'
}

// union
let union: (string | number)
union = 'hi';
union = 3;
// union = [];
// union = false;

// Function
let func1: (arg1:number, arg2:number) => number;
func1 = function(x, y) {
    return x * y;
}

let func2: () => void;
func2 = function() {
    console.log('hi');
}

// null, undefined
let number1: number = undefined;  //strictNullChecks = false
let string3: string = null;
let object: {a: 10, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;

// void
function greeting(): void {
    console.log('hi');
}

const hi: void = greeting();
console.log(hi);    // undefined

// never
function throwError(): never {
    throw new Error('error');
}

function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}

const never: never[] = [];
// never.push(1);