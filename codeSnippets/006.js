const obj = {};
Object.defineProperty(obj, "key", {
  value: 42,
  writable: false
});
obj.key = 100;
console.log(obj.key);

/*
Output:
42

Why?
obj.key = 100 attempts to change `key`, but since writable is false, the assignment 
fails silently in non-strict mode (or throws a TypeError in strict mode).

*/