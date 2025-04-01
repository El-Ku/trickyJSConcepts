const obj = {
    name: "vipin",
    print() {
        console.log(this.name);
    }
};

obj.print();  //prints "vipin"  (first line)
setTimeout(obj.print, 100); //prints "undefined"   (3rd line)

/*
Why?
JavaScript sets 'this' to the object that owns the method when it’s called using dot notation. 
So, this.name resolves to obj.name, which is "vipin".

In the 2nd case, when setTimeout eventually calls the function, it doesn’t “remember” that 
print belongs to obj. The assignment only copies the function reference—it doesn’t 
carry over the context. By default, setTimeout executes the function in the global context.

Still why does it print 'undefined'?
    setTimeout calls print with 'this' as undefined (likely strict mode or a modern JS environment).

How to solve it?
*/

//Use an arrow function
setTimeout(() => obj.print(), 200);     //prints "vipin"  (4th line)
//Why does it work? 
//Arrow functions don’t have their own `this`; they inherit this from the surrounding scope. 
//Here, the surrounding scope is where obj.print() is called directly, so this is still obj.
//But arrow functions do have their lexical environment. 
//so if I change obj.name after I pass the function to setTimeout, after 200 ms it will still use the updated name.


const fn = obj.print;
fn(); // What does this output?  
//It will also print "undefined"   (2nd line)
