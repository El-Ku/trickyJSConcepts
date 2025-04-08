const obj = {};
Object.defineProperty(obj, 'key', {
    get: () => Math.random(),
    enumerable: true
});
console.log(obj.key == obj.key);

/*
Output: 
false

Why?
The key property’s getter returns a new random number via Math.random() 
each time it’s accessed. When obj.key === obj.key is evaluated, 
the left obj.key generates one random number, and the right obj.key generates another.
*/

