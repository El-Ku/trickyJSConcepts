async function foo() {
  console.log(typeof (await 20));
}

foo();

/*
Output:
number

Why?
await automatically wraps non-Promise values in a Promise.resolve(...).
So what is done is `await Promise.resolve(20);` which resolves into 20 
which is passed into typeof.

*/
