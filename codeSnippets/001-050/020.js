setTimeout(() => console.log("A"), 0);
Promise.resolve()
  .then(() => console.log("B"))
  .then(() => setTimeout(() => console.log("C"), 0))
  .then(() => console.log("D"));
console.log("E");

/*
Output:
E
B
D
A
C

Why?

Microtasks: Promise .then callbacks are queued as microtasks, which run after synchronous code but before macrotasks.
Macrotasks: setTimeout callbacks are queued as macrotasks, which run after all microtasks in the current cycle are cleared.

The question could be that why the statement, 'setTimeout(() => console.log("C"), 0)' 
not block the promise from resolving?

  The Promise returned by the .then resolves immediately with `undefined` 
  once the callback finishes executing, not when the setTimeout’s scheduled callback (logging "C") runs.
  setTimeout is Fire-and-Forget: It schedules a task and moves on. 
  It doesn’t inherently “pause” execution or tie itself to the Promise chain 
  unless you explicitly wrap it in a Promise.

*/