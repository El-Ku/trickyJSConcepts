When a **regular function** is invoked as a method of an object (obj.method()), `this` points to that object. When invoked as a standalone function (not attached to an object: func()), `this` typically refers to the global object (in non-strict mode) or undefined (in strict mode). The value of `this` is not the object that has the function as an own property, but the object that is used to call the function. 

**Arrow functions** do not have their own `this`. Instead, they inherit `this` from the surrounding (lexical) scope where they are defined. This makes them "lexically bound" to the `this` of the enclosing scope, which is fixed at the time the function is created and cannot be changed (even with .bind(), .call(), or .apply()). They’re often used when you want `this` to remain consistent regardless of how the function is called.

Lets look at some examples with this theory in mind:

### Snippet 1:

```js
const obj = {
    name: "vip",
    sayHi: function() {
        console.log("Hi " + this.name);
        console.log(this);
    },
    sayHello: () => {
        console.log("Hello " + this.name);
        console.log(this);
    }
}
obj.sayHi();
obj.sayHello();
```

#### **Output:**
```
Hi vip
{
  name: 'vip',
  sayHi: [Function: sayHi],
  sayHello: [Function: sayHello]
}
Hello undefined
{}
```

**Why?**

- sayHi is called from obj, so `this`=obj (as its a normal function). 
- sayHello is also called from obj, but its called from the global context, and so:
  - `this`=window for non-strict mode or 
  - `this`=undefined for strict mode(as its an arrow function)


### Snippet 2:

```js
const obj = {
    arr: [1,2,3],
    sum: 0,
    findSumNormal: function() {
        this.arr.forEach(function(value) {
            this.sum += value;
            console.log(this.sum)
            console.log("inside foreach of normal function == globalthis?", globalThis == this);
        });
        console.log("inside normal function == globalthis?", globalThis == this);
        return this.sum;
    },
    findSumArrow: function() {
        this.arr.forEach((value) => {
            this.sum += value;
            console.log("inside foreach of arrow function == globalthis?", globalThis == this);
        });
        console.log("inside arrow function == globalthis?", globalThis == this);
        return this.sum;
    }
}

console.log(obj.findSumNormal());
console.log(obj.findSumArrow());
```

#### **Output:**

```
NaN
inside foreach of normal function == globalthis? true
NaN
inside foreach of normal function == globalthis? true
NaN
inside foreach of normal function == globalthis? true
inside normal function == globalthis? false
0
inside foreach of arrow function == globalthis? false
inside foreach of arrow function == globalthis? false
inside foreach of arrow function == globalthis? false
inside arrow function == globalthis? false
6
```

**Why?**
    
When a function is passed as a callback, the value of `this` depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a `this` value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of `this` is the global object (globalThis). This is the case for iterative array methods(like forEach), the Promise() constructor, etc.

But the array function inherit `this` from the outer scope, which is the method findSumArrow, and there `this` === obj.

**Is it possible to fix the normal function above?**

```js
findSumFixed: function() {
    const self = this;  //self points to obj
    this.arr.forEach((value) => {
        self.sum += value;  //notice change here
        console.log("inside foreach of arrow function == globalthis?", globalThis == this);
    });
    console.log("inside arrow function == globalthis?", globalThis == this);
    return self.sum;   //notice change here as well
}
```
