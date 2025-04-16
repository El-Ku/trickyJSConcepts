Promise.resolve(Promise.resolve(Promise.resolve(42)))
  .then((value) => console.log(value));

/*
Output:
42

Why?
Promise.resolve unwraps nested Promises until it reaches a non-Promise value.

*/
