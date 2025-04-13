obj = {
    a: 1,
    b: 2,
    a: 3
};
console.log(obj);

/*
Output:
{ a: 3, b: 2 }

Why?
When an object literal contains duplicate property names, the last occurrence of a 
property name overwrites any previous ones. 
*/