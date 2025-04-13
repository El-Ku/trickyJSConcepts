//Continuation from 042.js
var length = 4; 
function callback() { 
    console.log(this.length); // What is logged? 
} 
const object = { 
    length: 5, 
    method() { 
        arguments[0](); 
    } 
}; 
object.method(callback, 1, 2);

/*
Output:
3

Why?
object.method(callback) invokes method on object, passing the global callback function.
Inside method, `this` is object (because it’s called as object.method()), so this.length would be 5 if referenced.

`arguments[0]()` is a method invocation of `callback` on `arguments` object, 
`this` inside the `callback` equals `arguments` (When `arguments[0]()` is called, 
the function `callback` is called as a method of arguments).
As result `this.length` inside `callback()` is same as `arguments.length` — which is `3`.
As result `this.length` inside `callback()` is same as `arguments.length` — which is `3`.

*/