const p1 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000));
const p2 = 42;
const p3 = Promise.reject("Fast fail");

Promise.race([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

/*
Output:
42

Why?
If the iterable contains one or more non-promise value and/or an already settled promise, 
then Promise.race will settle to the first of these values found in the array.
In our case both p2 and p3 are immediately resolved, but p2 comes first in the array so
its result is consoled.

If the array was given as [p1, p3, p2] then output would have been `Fast fail`.
*/
