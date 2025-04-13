const obj = { a: 1 };
obj.a = 2;
console.log(obj.a);

const arr = [1, 2];
arr.push(3);
console.log(arr);

/*
Output:
2
[ 1, 2, 3 ]

Why?

const: Prevents reassignment of the variable, not mutation of the object it references.

Object: obj.a = 2 mutates the object’s property, allowed since obj still points to the same object.
Array: arr.push(3) mutates the array, allowed since arr still references the same array.

Tricky Part: const locks the binding, not the value’s internal state. 
    obj = {} or arr = [] would throw an error.

*/