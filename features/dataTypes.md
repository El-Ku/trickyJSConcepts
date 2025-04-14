```js
//primitive data types
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});
console.log(typeof Symbol("sym"));
console.log(typeof 1000n);
//non-primitive.
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
```

### Output:

```
number
string
boolean
object
undefined
function
symbol
bigint
object
object
```

Primitive data types are:
- Not objects
- Immutable (cannot be changed)
- Stored by value (not by reference)

