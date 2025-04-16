console.log("Start");

Promise.resolve("Resolved")
  .then((result) => console.log(result));

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

/*
Output:
Start
End
Resolved
Timeout

Why?
JavaScript’s event loop prioritizes tasks in the following order: 
    synchronous code, microtasks (e.g., Promise resolutions), and macrotasks (e.g., setTimeout). 
    
*/
