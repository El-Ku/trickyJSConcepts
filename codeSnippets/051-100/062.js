const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("p1"), 100));

p1
  .then((val) => console.log(val))
  .catch((err) => console.log("err", err));

const p2 = new Promise((resolve, reject) => setTimeout(() => reject("p2"), 200));

p2.catch((err) => console.log("err", err))
  .then((val) => console.log(val));


/*
Output:
p1
err p2
undefined

Why?
p1 is resolved after 100 msec, so the `then` consols "p1". As there is no error, catch block is skipped.

In the second part, p2 is rejected with the reason "p2" and so the catch block is executed and the error is consoled.
The `then` comes after the catch block. Since the .catch() doesn't return anything explicitly, 
it passes undefined to .then(...) which gets consoled out.

*/
