let foo = 42
foo = 'bar';
foo = true;

console.log(typeof foo);

const name = "han";
const age = 30;
const hasJob = true;
const car = null; // null
let anything; // undefined
const sym = Symbol(); // Symbol

const hobbies = ['walking', 'reading'];
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof hobbies);
console.log(Array.isArray(hobbies));
console.log(Array.isArray(address));

let val;
val = String(111);
val = String(8 + 4);
console.log(val);
console.log(typeof val);
console.log(val.length);

let bval;
bval = false;
bval = String(false);
console.log(bval);
console.log(typeof bval);
console.log(bval.length);

let dval;
dval = String(new Date());
console.log(dval);
console.log(typeof dval);
console.log(dval.length);

let aval;
aval = [1, 2, 3, 4, 5];
aval = String([1, 2, 3, 4, 5]);
console.log(aval);
console.log(typeof aval);
console.log(aval.length);

let tval;
tval = (5).toString();
console.log(tval);
console.log(typeof tval);
console.log(tval.length);
