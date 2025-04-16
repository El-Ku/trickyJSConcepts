Promise.resolve()
  .then(() => {
    throw new Error("First error");
  })
  .catch((error) => {
    console.log(error.message); // First log
    return "Recovered";
  })
  .then((value) => {
    console.log(value); // Second log
    throw new Error("Second error");
  })
  .then((value) => {
    console.log(value); // Third log
  })
  .catch((error) => {
    console.log(error.message); // Fourth log
  });

/*
Output:
First error
Recovered
Second error

Why?
Promise chains handle errors and recoveries sequentially.

*/
