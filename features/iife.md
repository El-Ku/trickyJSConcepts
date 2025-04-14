**IIFE (Immediately Invoked Function Expression)** is a function that is defined and then immediately invoked (called).

```js
// with a normal function
(function () {
  console.log("iife with normal function");
})();

//with an arrow function
(() => {
  console.log("iife with arrow function");
})();
```

### Why use IIFE?

- Everything inside the function is private — no variables leak outside.
- Useful before let and const existed (when var was the only way and had function scope).
- Great for initializations, like config, caching, or module setup.
