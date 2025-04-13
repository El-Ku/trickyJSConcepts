let x = 1;

if (function f() {}) {
  x += " " + typeof f;
}

console.log(x);

const myFunction = function namedFunction() {
  console.log(typeof namedFunction); 
};
myFunction(); 
console.log(typeof namedFunction); 
console.log(typeof myFunction);

/*
Output:
1 undefined
function
undefined
function

Why?

function f() {} is technically a named function expression. It evaluates to a function object, which is truthy.
Note that, inside if (...), it’s an expression and so its not hoisted.
Despite being a named function expression (function f() {}), f is not accessible 
in the surrounding scope (e.g., global or block scope) due to how named function expressions work.
In a named function expression, the name (f) is only available inside 
the function itself for recursion, not outside it.
Outside the expression, f is undefined because it’s not declared in the enclosing scope.

*/