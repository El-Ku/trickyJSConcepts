let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x);

let x = 1;
let y = x;
y = 2;
console.log(x);

/* 
Output:
2
1

Why?

Objects are mutable and shared via reference, while primitives are immutable and copied.

 */