## **Create an object in different ways:**

### 1. Object Literal Notation

```js
const obj = {
  name: "Vip",
  sayHi: function () {
    console.log("Hi " + this.name);
  },
  sayHello() {
    console.log("Hello " + this.name);
  },
};

console.log(obj.name); //Vip
obj.sayHi(); //Hi Vip
obj.sayHello(); //Hello Vip
```

### 2. Using the new Object()

```js
const obj2 = new Object();
console.log(obj2); //{}
console.log(typeof obj2); //object
obj2.property1 = "a random property";
obj2.method1 = function () {
  console.log("added method");
};
console.log(obj2); //{ property1: 'a random property', method1: [Function (anonymous)] }
```

### 3. Using the constructor function

```js
function Box(width, length) {
  this.width = width;
  this.length = length;
  this.getArea = function () {
    return this.width * this.length;
  };
}

const myBox = new Box(5, 10);
console.log(myBox.width); //5
console.log(myBox.length); //10
console.log(myBox.getArea); //[Function (anonymous)]
console.log(myBox.getArea()); //50
```

### 4. Using classes (syntactic sugar of above)

```js
class Square {
  constructor(side) {
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
}

const mySquare = new Square(5);
console.log(mySquare.side); //5
console.log(mySquare.getArea()); //25
```

## Accessing the properties of an object

```js
const shape = {
  name: "rectangle",
  size: {
    length: 10,
    width: 5,
  },
  area() {
    return this.size.length * this.size.width;
  },
};

// Using dot notation
console.log(`Length of the ${shape.name} is ${shape.size.length}`);
// Using bracket notation
console.log(`Width of the ${shape["name"]} is ${shape["size"]["width"]}`);
// Dynamically accessing a property.
const propertyToAccess = "area";
console.log(`The area of the ${shape["name"]} is calculated by using the function:
    ${shape[propertyToAccess]}`);
```

### How to add/delete a property?

```js
shape.perimeter = function() {
    return 2*(this.size.length + this.size.width);
}
console.log(`Perimeter of the ${shape["name"]} is ${shape.perimeter()}`);

// How to delete a property?
delete shape.name;
console.log(shape["name"]);  //prints undefined

//Try to delete a property which doesnt exist on the object.
delete shape.name;  //ignored
```

### Create an object with properties from a variable

```js
const propName = "name";
const propValue = "vip";
const myObj = {
  [propName]: propValue  //wrap around in square brackets.
};
console.log(myObj.name, myObj["name"], myObj[propName]);  //vip vip vip
```
