const promise = Promise.resolve(Promise.reject("rejected"));
promise
  .then((value) => console.log(value))
  .catch((error) => console.log("Error:", error));

/*
Output:
Error: rejected

Why?
If a Promise is resolved with another Promise, it waits for that Promise to settle, then takes its state and value/reason.

Promise.reject("rejected") is rejected with the reason "rejected".
The outer promise doesnt resolve with a promise. Instead, it adopts the state of the inner.

"The value parameter passed to resolveFunc can be another promise object, 
in which case the newly constructed promise's state will be "locked in" 
to the promise passed (as part of the resolution promise). " - MDN Docs.


*/
