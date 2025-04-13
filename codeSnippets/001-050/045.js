function Human(f, l) {
    this.f = f;
    this.l = l;
};

const h1 = new Human("v", "l");
const h2 = Human("m", "g");

console.log(h1);
console.log(h2);


/*
Output:
Human { f: 'v', l: 'l' }
undefined

Why?
    When new keyword is used, it creates a new object which is stored in h1.
`Human` is a function and when called without `new`, `this` inside it points to the 
global object. 
The function doesnt return anything as such so "undefined" will be printed on console.

Note:
console.log(globalThis.f);   //prints "m"
console.log(globalThis.l);   //prints "g"
*/
