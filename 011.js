console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

/* 
Output:
Start
End
Promise
Timeout

Why?

Event Loop: JavaScript is single-threaded and uses a queue for asynchronous tasks, 
with different priorities for microtasks (e.g., Promises) and macrotasks (e.g., setTimeout).

setTimeout(..., 0) doesn’t run instantly—it’s deferred to the next macrotask cycle, 
while Promises run in the microtask phase. Later has higher priority. 


 */