The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

It allows you to associate handlers with an asynchronous action's eventual `success value` or `failure reason`. The asynchronous method returns a `promise` to supply the value at some point in the future.

A Promise is in one of these states:

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled**: meaning that the operation was completed successfully.
- **rejected**: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called.

If a Promise is already done (succeeded or failed) when you add a handler, that handler runs right away with the result or error. This prevents problems where an async task finishes before you set up its handler, so there's no timing issue. Here is an example to demonstrate this:

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});

// Simulate a delay in attaching the .then() handler
setTimeout(() => {
  p.then((value) => {
    console.log("Got value:", value);
  });
}, 2000);
```

A promise is said to be `settled` if it is either fulfilled or rejected, but not pending.

Let us look at a basic promise and how the result or error is returned from it to the handler.

```js
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) 
        resolve("this text is returned to promise success handler");
    else 
        reject("this error is returned to promise failure handler");
});

myPromise
    .then((msg) => {
        //this text is returned to promise success handler
        console.log(msg)
    })
    .catch((error) => {
        //Error: this error is returned to promise failure handler
        console.log(`Error: ${error}`);   
    });
```

Depending on whether `success` is true or false, it will print one of the above commented messages to console.

We can also define handler functions and call them inside `then` or `catch` like this example:

```js
myPromise
    .then((msg) => {
        processSuccess(msg);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);   
    });
    
//handler function is defined here
function processSuccess(message) {
    console.log(message);
};
```

### Chained Promises

Promises can also be chained. Lets look at an example:

```js
const firstPromise = new Promise((resolve) => {
    const resultOfFirstPromise = 10;
    setTimeout(() => resolve(resultOfFirstPromise), 1000);
});

firstPromise
    .then(resultOfFirstPromise => {
            console.log("resultOfFirstPromise:", resultOfFirstPromise);
            return new Promise((resolve, reject) => {
                if(resultOfFirstPromise == 10)
                    setTimeout(() => resolve("Result from second promise"), 1000);
                else
                    reject("Error from second promise");
            });
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
```

Depending on the value of `resultOfFirstPromise`, we will get one of the following outputs:

```
resultOfFirstPromise: 11           [after 1 second]
Error from second promise          [Immediately]

OR

resultOfFirstPromise: 10           [after 1 second]
Result from second promise         [after 2 second]
```

## Promise Methods

JavaScript provides utility methods for handling multiple Promises

### 1. Promise.all: Takes an array of Promises and resolves when all succeed, or rejects if any fail.

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 1 succeeded"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 3 succeeded"), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error:" ,error));

//Output:
//[ 'promise 1 succeeded', 'promise 2 succeeded', 'promise 3 succeeded' ]              (after 3 seconds)
```

Lets see what happens when one of the promises get rejected.

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 1 succeeded"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 2 fails"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 3 succeeded"), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error:" ,error));

//Output:
//Error: promise 2 fails   (after 2 seconds)
```

Note the following points:
- Promise.all resolves when all input promises resolve, with an array of their resolved values in the same order as the input promises.
- It rejects as soon as any input promise rejects, with the reason of the first rejection. Other promises continue running but their results are ignored by Promise.all.

### 2. Promise.allSettled: Takes an array of Promises and waits for all to settle

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 1 succeeded"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 2 fails"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 3 succeeded"), 3000);
});

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log(results));
```

We get the following output:

```
[
  { status: 'fulfilled', value: 'promise 1 succeeded' },
  { status: 'rejected', reason: 'promise 2 fails' },
  { status: 'fulfilled', value: 'promise 3 succeeded' }
]
```

Note that each result object has:
- **status**: Either "fulfilled" or "rejected".
- **value**: The resolved value (if fulfilled).
- **reason**: The error (if rejected).


### 3. Promise.any: Takes an array of Promises and returns the first fulfilled result or AggregateError

Lets look at an example where at least one promise fulfills.

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 1 succeeded"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 3 succeeded"), 3000);
});

Promise.any([promise1, promise2, promise3])
    .then((results) => console.log(results));

//Output: 
//promise 2 succeeded     (after 2 seconds)
```

Now lets see what happens when all promises get rejected:

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 1 succeeded"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 2 succeeded"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 3 succeeded"), 3000);
});

Promise.any([promise1, promise2, promise3])
    .then((results) => console.log(results));
```

Output looks like this:  (after 3 seconds)

```
[AggregateError: All promises were rejected] {
  [errors]: [
    'promise 1 succeeded',
    'promise 2 succeeded',
    'promise 3 succeeded'
  ]
}
```

Note that:
- The errors are in the order of the promises passed, regardless of completion order.
- The fulfillment value is the fulfillment value of the first promise that was fulfilled.


### 4. Promise.race: Takes an array of Promises and settles with the eventual state of the first promise that settles.

Lets look at an example where the first promise fulfills:

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise 1 succeeded"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 2 failed"), 4000);
});

Promise.race([promise1, promise2])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error:", error));

//Output:
//promise 1 succeeded            (after 1 second)
```

Now we will see an example where the first promise gets rejected:

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise 1 failed"), 1000);
});

const promise2 = new Promise((resolve, resolvereject) => {
    setTimeout(() => resolve("promise 2 succeeded"), 4000);
});

Promise.race([promise1, promise2])
    .then((results) => console.log(results))
    .catch((error) => console.log("Error:", error));

//Output:
//Error: promise 1 failed         (after 1 second)
```