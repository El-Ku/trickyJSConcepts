const x = 10;

function foo() {
  console.log(x);
  const x = 20;
}

foo();

/*
Output:
ReferenceError: Cannot access 'x' before initialization

Why?

Variables declared with const (and let) are hoisted to the top of their block scope, 
but unlike var, they are not initialized until the declaration is executed.

From the start of the block (here, the function scope) until the const x = 20 line, 
x is in the Temporal Dead Zone (TDZ).

TDZ Effect:
In the TDZ, accessing x before its declaration throws a ReferenceError: Cannot access 'x' before initialization.

This shadows the global x = 10.
JavaScript doesn’t look outside the scope if a local x is declared, even if it’s after the access attempt.

*/