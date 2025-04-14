Lets look at some common methods useful when dealing with objects.

```js
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(obj);  //{ a: 1, b: 2, c: 3 }
```

### 1. Return keys(property names) alone

```js
console.log(Object.keys(obj));   //[ 'a', 'b', 'c' ]
```

### 2. Return values alone

```js
console.log(Object.values(obj));    //[ 1, 2, 3 ]
```

### 3. Return both keys and values

```js
console.log(Object.entries(obj));   //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

### 4. Deep copy

```js
//Copy properties from one object to another.
const target = {};
Object.assign(target, obj);
console.log(target);   //{ a: 1, b: 2, c: 3 }
obj.c = 4;  //its fully copied. both have different references in memory.
console.log(obj.c, target.c);   // 4 3
```

### 5. Freeze (Make it immutable)

```js
// Prevents modifications. Once its frozen it cannot be unfreezed.
Object.freeze(obj);
obj.c = 3;
console.log(obj.c);  //still prints 4
```



