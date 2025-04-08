const obj = {
  a: 10,
  get a() {
    return 20; // Fixed value
  },
};
console.log(obj.a);

/*
Output:
20

Why?
When an object has both a property and a getter with the same name, 
the getter takes precedence when you access that property.

*/
