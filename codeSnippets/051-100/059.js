Promise.resolve("Start")
  .then((value) => {
    console.log(value); // First log
    Promise.resolve("Next").then((v) => console.log(v)); // Second log
  })
  .then((value) => {
    console.log(value); // Third log
  });

/*
Output:
Start
Next
undefined

Why?
The first `then` doesnt return any values, so 2nd `then` consoles undefined.

*/
