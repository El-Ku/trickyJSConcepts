const promise = Promise.resolve(Promise.reject("rejected"));
promise
  .then((value) => console.log(value))
  .catch((error) => console.log("Error:", error));

/*
Output:
Error: rejected

Why?


*/
