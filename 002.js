let b;
console.log(b);
b = 20;

console.log(a);
let a;
a = 10;


/* Outputs:
undefined
ReferenceError: Cannot access 'a' before initialization

Why?
Variables declared with `var` are hoisted and initialized with `undefined` immediately.
Variables declared with `let` or `const` are hoisted but not initialized 
until the line of code where they’re declared is executed. 
The time between the start of the scope and the declaration is called the Temporal Dead Zone (TDZ).
It only applies to accesses that happen before the declaration line is executed in the code.

*/