/* Console 객체 */
console.log('안녕하세요');
console.log(123);
console.log(true);

var greeting1 = '안녕';
console.log(greeting1);

console.log({a: "a", b: "b"});
console.table({a: "a", b: "b"});

console.error('Error!');
console.warn('Warning!');

console.time('Hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello');

console.clear();

/* var */
var A = 1;
console.log(A);

var greeting2 = 'hello';
console.log(greeting2);
var greeting2 = 'hi';
console.log(greeting2);

greeting2 = 'how are you?';
console.log(greeting2);

console.clear();

/* let */
let greeting3 = 'hello';
console.log(greeting3);

// let greeting3 = 'hi';
// console.log(greeting);

greeting3 = 'how are you?';
console.log(greeting3);

console.clear();

/* const */
const greeting4 = 'Hello';
console.log(greeting4);

// const greeting4 = 'Hi';
// console.log(greeting4);

// greeting4 = 'how are you'?
// console.log(greeting4);

/* scope */

function func1() {
    if (true) {
        var a = 'a';
        console.log(a);
    }
    console.log(a);
}
// console.log(a);
func1();

function func2() {
    if (true) {
        let b = 'b';
        console.log(b);
    }
    // console.log(b);
}
func2();

function func3() {
    if (true) {
        const c = 'c';
        console.log(c);
    }
    // console.log(c);
}
func3();

console.clear();


/* Hoisting */
// console.log(greet);

// var greet = 'hello';         // undifined
// let greet = 'hi';            // cannot access
// const greet = 'how are u?';     // cannot access

func();

function func() {
    console.log('hoisting test');
}
