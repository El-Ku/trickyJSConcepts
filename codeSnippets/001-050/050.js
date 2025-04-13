(function foo() {
  console.log(foo, typeof foo); // ?
})();

console.log(typeof foo); // ?

/*
Output:
[Function: foo] function
undefined

Why?
Inside the IIFE, foo is accessible (function name binding).
Outside the IIFE, foo is not defined — it’s not globally scoped.
*/
