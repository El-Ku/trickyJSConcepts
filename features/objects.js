// Create an object in different ways.

//1. Object Literal Notation

const obj = {
    name: "Vip",
    sayHi: function() {
        console.log("Hi " + this.name);
    },
    sayHello() {
        console.log("Hello " + this.name);
    }
}

console.log(obj.name);  //Vip
obj.sayHi();            //Hi Vip
obj.sayHello();         //Hello Vip

//2. Using the new Object()

const obj2 = new Object();
console.log(obj2);          //{}
console.log(typeof(obj2));  //object
obj2.property1 = "a random property";
obj2.method1 = function() { console.log("added method")};
console.log(obj2);          //{ property1: 'a random property', method1: [Function (anonymous)] }


//3. Using the constructor function

function Box(width, length) {
    this.width = width;
    this.length = length;
    this.getArea = function() {
        return this.width * this.length;
    };
}

const myBox = new Box(5,10);
console.log(myBox.width);       //5
console.log(myBox.length);      //10
console.log(myBox.getArea);     //[Function (anonymous)]
console.log(myBox.getArea());   //50


//4. Using classes (syntactic sugar of above)

class Square {
    constructor(side) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

const mySquare = new Square(5);
console.log(mySquare.side);         //5
console.log(mySquare.getArea());    //25
