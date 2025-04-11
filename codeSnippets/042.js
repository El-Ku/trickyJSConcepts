var length = 4; 
function callback() { 
    console.log(this.length); // What is logged? 
} 
const object = { 
    length: 5, 
    method(callback) { 
        callback(); 
    } 
}; 
object.method(callback);

/*
Output:
undefined

Why?
object.method(callback) invokes method on object, passing the global callback function.
Inside method, `this` is object (because it’s called as object.method()), so this.length would be 5 if referenced.
However, method simply calls callback() as a standalone function: callback();
So `this` defaults to:
Non-strict mode: The global object (window in browsers).
Strict mode: undefined 

Since window has a variable declared as length, in non-strict mode, it will print "4".

*/