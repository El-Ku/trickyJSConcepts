const promise = Promise.reject(Promise.resolve("resolved"));
promise
  .then((value) => console.log(value))
  .catch((error) => console.log("Error:", error));

/*
Output:
Error: Promise { 'resolved' }

Why?
Syntax of Promise.reject is `Promise.reject(reason)`
In our case the reason for the rejection is the resolved promise. 
The rejection reason can be any value, including another promise. 
The .catch handler receives this reason as-is, without unwrapping the inner promise.

*/
