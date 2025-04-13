function test() {
  x = 10;
  var x = 20;
  console.log(x);
}
test();
console.log(typeof x);

function test2() {
  x = 10;
  console.log(x);
}
test2();
console.log(typeof x);

/*
Output:
20
undefined
10
number

Why?

In non-strict mode, x = 10 would create a global x(as its not declared as a var/let/const),
if there were no var x later, but here, var x keeps it function-scoped.

*/
