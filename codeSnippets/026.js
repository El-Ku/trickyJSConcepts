const obj = { a: 1, b: 2, c: 3 };
const { b, a } = obj;
console.log(a, b);
const { b2, c } = obj;
console.log(b2, c);

/*
Output:
1 2
undefined 3

Why?

This is called Object Destructuring. Properties from obj are extracted and assigned
to variables with the same names as the property keys.
Two new variables are declared in the current scope.
The order in the destructuring (b, a) doesn’t matter—property names are matched by key, not position.

In the second destructuring, JS looks for a property named b2 in obj. 
There’s no b2 property (only a, b, and c exist), so b2 is assigned undefined.

*/