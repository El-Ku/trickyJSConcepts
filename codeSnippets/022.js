let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

/*
Output:
false
false
true
false

Why?

When comparing two objects, == checks if they are the same object 
(i.e., same memory reference), not if their contents are equal.
3rd one is true because z was assigned y, so they reference the same array object in memory.

*/