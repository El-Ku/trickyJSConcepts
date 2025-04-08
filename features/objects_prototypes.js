// Every JavaScript object has an internal link to another object called its prototype. 
// (accessed via __proto__ or Object.getPrototypeOf):
const obj = {name: "object"};
console.log(obj.__proto__);                 // [Object: null prototype] {}
console.log(Object.prototype);              // [Object: null prototype] {}
console.log(Object.getPrototypeOf(obj));    // [Object: null prototype] {}

// We can create prototypes in different ways:
// 1. Constructor function
function Team(size) {
    this.size = size;
};
Team.prototype.name = "js";
Team.prototype.getSize = function() {
    return this.size
}; 

const team = new Team(10);
console.log(team.size, team.name, team.getSize());
console.log(Object.getPrototypeOf(team));
console.log(team.__proto__);
console.log(Team.prototype);

/*
prototype can be added as a complete object as well, instead of adding properties one by one.
For example:

team.prototype = { 
    name: "js",
    getSize() {
        return this.size
    }
}
Team.prototype.oneMoreProp = "sample";
console.log(team.oneMoreProp);  //sample
*/


// 2. Classes
class Coin {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    printName() {
        console.log(this.name);
    }
}

const eur = new Coin("euro", "EUR");
eur.printName();
console.log(Coin.prototype === eur.__proto__);  //true
// Underneath, classes is the same as the constructor function approach.
// Classes is just ES6 Syntactic Sugar

// 3. Manually Setting Prototypes
const Table = {
    numLegs: 4
}
const bigTable = Object.create(Table);
console.log(bigTable.__proto__ === Table)


// Properties are looked up dynamically along the chain.
const obj1 = {a:1};
const obj2 = Object.create(obj1);
obj2.b = 2;
const obj3 = Object.create(obj2);
obj3.c = 3;
console.log(obj3.a, obj3.b, obj3.c); // 1 2 3
console.log(obj3.hasOwnProperty("a"));  //false (because its inherited property)

console.log(obj2.c);   //undefined
//above prints undefined because properties are looked up only in parents and not on childs.

//changing a property on a parent dynamically updates the same property on all the childs.
obj1.a = 11;
console.log(obj1.a, obj2.a, obj3.a); // 11 11 11











