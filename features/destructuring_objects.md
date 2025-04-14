Destructuring is a syntax that lets you unpack values from arrays or properties from objects into separate variables — in a super clean and readable way.

```js
const obj = {
    name: "vip",
    age: 30,
    experience: [
        {
            name: "matlab",
            expYears: 8
        },
        {
            name: "js",
            expYears: 1
        }
    ],
    anotherObj: {
        prop1: "prop value",
        prop2: 23
    },
    objObj: {
        obj2: {
            p1: "p11",
            p2: 45
        }
    }
}

const {age} = obj;
console.log(age);  //30
```

#### 1. Assign to a different variable name

```js
const {age: newVarName} = obj;
console.log(newVarName);  //30
```

#### 2. what if the property name doesnt exist inside the object?

```js
const {noExistVar} = obj;
console.log(noExistVar);  //undefined
```

#### 3. object within an obj

```js
const {anotherObj:{prop1}} = obj;
console.log(prop1);  //prop value
```

#### 4. object within an obj, but using a new variable name

```js
const {anotherObj:{prop1: diffPropName}} = obj;
console.log(diffPropName);  //prop value
```

#### 5. Accessing array elements

```js
const { experience: [firstExp] } = obj;
console.log(firstExp.name); // "matlab"

const { experience: [,secondExp] } = obj;
console.log(secondExp.name); // "js"
```

#### 6. Access object within an object.

```js
const {objObj:{obj2:{p1}}} = obj; //use nested curly brackets.
console.log(p1);  // p11
const {objObj:{obj2:{p1: newP1Var}}} = obj;
console.log(newP1Var);  // p11
```
