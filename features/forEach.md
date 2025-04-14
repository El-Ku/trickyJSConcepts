`forEach` iterates over an array and runs a function for each element, but it doesn’t create a new array or return the results of the callback.

Its purpose is side effects (e.g., logging, mutating something), and it returns undefined

```js
const arr = [1,2,3];
arr.forEach((value) => console.log(value*value));  //prints 1 4 9
```

#### The base array can be mutated in the following way:

```js
arr.forEach((value, i) => arr[i] = value*value);
console.log(arr);  //prints [ 1, 4, 9 ]
```

It returns undefined

```js
const arr2 = [1, 2, 3];
let newArr = arr2.forEach((value, index) => arr2[index] = value * value);
console.log(arr2, newArr);   //[ 1, 4, 9 ] undefined
```

Use `map` if you want to return the modified array in a new variable.

