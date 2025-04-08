/*
const obj1 = {
    set x(value) { this.x = value; }
};
obj1.x = 10;

Output:
RangeError: Maximum call stack size exceeded

Why?
set x(value) { this.x = value; }
This would cause an infinite loop, because:
    this.x invokes the setter again, which invokes another setter and so on.

Solution?
*/

//Developers commonly use _x as the internal version of x to avoid this.
const obj = {
    set x(value) { this._x = value; }
};
obj.x = 10;
console.log(obj.x);

/*
Now there is no error, but the output is "undefined". Why?

This is because, if we are creating a setter or getter for a variable, we need
to also create its opposite which is a getter or setter respectively.
*/

//Fix: Always define both getter and setter.
const obj2 = {
    set x(value) { this._x = value; },
    get x() { return this._x; }
};
obj2.x = 10;
console.log(obj2.x);  //consols 10.

//lets try one where the variable has a getter, but not a setter.
const obj3 = {
    _x: 20,
    get x() { return this._x; }
};
console.log(obj3.x);  //prints 20
//lets try to change value of x from outside
obj3.x = 30;
console.log(obj3.x);  //still prints 20
console.log(obj3._x);  //prints 30.

//In short, the name of the variable is used as the name of the getter/setter function.
//The variable name is appended with an underscore(its a convention and not a rule) 
//      and used as an internal version.
//And if you are declaring one, better to declare the other one also.

