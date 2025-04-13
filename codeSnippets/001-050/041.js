//Same snippet from file 001.js
const obj = {
    name: "vipin",
    print() {
        console.log(this.name);
    }
};

setTimeout(obj.print, 100); //prints "undefined"  

//Correct the above code without modifying the obj Object.
//Solution:
setTimeout(function() {
    obj.print();
}, 200);

/*
Why?
The setTimeout callback is a new function: function() { obj.print(); }.
Inside this callback, obj.print() is called explicitly as a method of obj.
When obj.print() runs, this inside print is correctly bound to obj, so this.name is "vipin".

*/