let counter = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

console.log(counter()); // ?
console.log(counter()); // ?
console.log(counter()); // ?

/*
Output:
1
2
3

Why?
The IIFE returns an inner function: function() { return ++count; }.
The IIFE’s result (the inner function) is assigned to counter.
The inner function has access to count because it’s defined in the IIFE’s scope.
Even after the IIFE finishes executing, the inner function retains a reference 
to count due to JavaScript’s closure mechanism.
Each time counter is called, it uses the same count variable, which persists across calls.

*/
