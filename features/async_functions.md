    - `Async` makes a function return a Promise.
    - await pauses the execution inside an async function until the Promise is resolved (or rejected).

Think of it as writing asynchronous code that looks synchronous.

Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. 

#### Example:

```js
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  console.log("all done");
}

asyncCall();
```

Output is:

```
calling
resolved
all done
```

`resolveAfter2Seconds` returns a promise which we `await` for to settle. The result is saved into `result` and then we continue with the rest of the code execution.

Can we find out what would be consoled from this code:

```js
async function foo() {
  const waitTime = 500;
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((resolve) => setTimeout(() => resolve("2"), 500));
  const timeNow = Date.now();
  const results = [await p1, await p2];
  console.log("Milliseconds passed: ", Date.now()-timeNow);
  console.log(results);
}
foo();
```

**Output:**

```
Milliseconds passed:  1000
[ '1', '2' ]
```

One question that can come up is that why doesn't it take 1000+500 msecs to settle the promises? 
    
    That is because both p1 and p2 start running concurrently — because they're created immediately. They're not blocked by any await yet. Both timers (1000ms and 500ms) start ticking together.

### Return value of an async function

Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent. An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

**Example:**

```js
const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

async function asyncReturn2() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

function basicReturn2() {
    return Promise.resolve(p);
}

console.log(p == basicReturn()); // true
console.log(p == asyncReturn()); // false
console.log(asyncReturn2() == asyncReturn());   // false
console.log(basicReturn2() === basicReturn());   // true
```

### Nature of Promise Chain from Async:

The promise chain is not built-up in one go. Instead, the promise chain is constructed in stages as control is successively yielded from and returned to the async function. 

In the below code when `waitTime = 500`, an UnhandledPromiseRejection error will be thrown. This is because, until p1 is settled, the control is not in foo(). But since p1 and p2 are declared without any await keyword, both timers start at the same time. Which means that p2 gets rejected while p1 is still happening(control is with p1). And the error gets uncaught causing the behavior.

```js
async function foo() {
  const waitTime = 500;
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), waitTime));
  const results = [await p1, await p2];
}
foo().catch((error) => console.log("Error", error)); 
```

Now, what if waitTime = 1500?

The code will print `Error 2` into the console. Why?
 - Because p1 gets settled before p2 and the control is back to foo(). This means by the time p2 gets rejected, the error is caught by the `catch` statement.


### Running multiple async's concurrently:

This can be achieved by Promise.all. There are two cases here.

#### 1. Run concurrently and wait for both to finish:

```js
const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("2"), 500));

async function concurrent() {
    const results = await Promise.all([p1, p2]);
    console.log(results);
}

concurrent();  // prints [ '1', '2' ] after 1 sec at the same time
```

#### 2. Run concurrently and process results as they come:

Note that even though we are logging inside each async function, we are still using Promise.all to wait for both to finish before moving on (if we had more code after it).

```js
const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("2"), 500));

async function concurrent() {
    const results = await Promise.all([
        (async () => console.log(await p1))(),
        (async () => console.log(await p2))()
    ]);
    console.log("done");
}

concurrent();  // 2 is printed after 0.5 secs and then 1 is printed after another 0.5 secs and then "done" is printed
```