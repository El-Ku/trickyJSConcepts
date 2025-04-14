This is the usual way in which an object is created and properties are added to it.

```js
const shape = {
    size: {
      length: 10,
      width: 5,
    },
    area() {
      return this.size.length * this.size.width;
    },
};
```

`defineProperty` can be used to add a property to the object.

### 1. Simplest way:

Adds a property without any initial value or attributes.

```js
Object.defineProperty(shape, "name", {
})
console.log(shape["name"]);  //prints undefined
```

### 2. Default values of the property: 

These are are default values of a property when added via `defineProperty`.

```js
Object.defineProperty(shape, "altName", {
    value: undefined,
    writable: false,
    configurable: false,
    enumerable: false
})
```

```
writable: if the value associated with the property may be 
          changed with an assignment operator.
configurable: cannot be deleted and its attibutes cannot be changed. Value can be changed
          if writable is true and writable can be changed to false.
enumerable: if and only if this property shows up during enumeration of the 
          properties on the corresponding object.
```

```js
console.log(shape);  //{ size: { length: 10, width: 5 }, area: [Function: area] }
```

#### Why doesnt the `name` property gets printed into console? 

    Because by default the enumerable attribute associated with the name property is set to false. So its not available to iterating logic. Note that you cannot change the attributes later if you dont set the configurable as true when you created them.

### 3. Adding more than one property at a time:

```js
Object.defineProperties(shape, {
  prop1: {
    value: 12,
    enumerable: true
  },
  prop2: {
    value: 13,
    enumerable: true
  }
});
console.log(shape); //prints prop1 and prop2 as well.
```
