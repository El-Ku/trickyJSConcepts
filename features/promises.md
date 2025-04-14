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
