const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;
console.log(a[b]);

/*
Output: 
456

Why?
When you use an object as a property key in another object (e.g., a[b]), 
the object isn’t used directly as the key. Instead, it’s converted to a string 
via its toString() method. This is because object property keys must be either strings or symbols.

Basically, objects used as keys are coerced to strings via toString().
So both b and c both became "[object Object]".

console.log(obj); will return { '[object Object]': 456 }

The [object Object] format comes from:
object — indicates it’s an object (part of the toString() convention).
Object — specifies the type or constructor name (here, Object for plain objects).

*/