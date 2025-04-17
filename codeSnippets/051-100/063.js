async function foo(name) {
  console.log(name, "start");
  await console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

/*
Output:
First start
First middle
Second start
Second middle
First end
Second end


Why?
foo("First") is called first and prints the first two consols. Then pauses at await.
foo("Second") is called next and prints the first two consols. Then pauses at await.
Once the microtask queue clears (i.e., the call stack is empty), the functions resume from after the await.

(MDN:- "Even when the used promise is already fulfilled, the async function's execution still 
pauses until the next tick. In the meantime, the caller of the async function resumes execution.")


*/
