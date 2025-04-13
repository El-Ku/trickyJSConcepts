function Foo() {}
Foo.prototype.x = 1;

const a = new Foo();
Foo.prototype.x = 2;

console.log(a.x);

a.x = 3;
console.log(a.x);

/*
Output:
2
3

Why?
Properties on the prototype are looked up dynamically. Initially, Foo.prototype.x = 1, 
but after a is created, Foo.prototype.x is updated to 2.
Since a doesn’t have its own x property, JavaScript looks up the prototype chain and 
finds Foo.prototype.x, which is now 2.

Tricky Part: Changing the prototype after instantiation affects all instances unless 
they’ve shadowed the property (which is why 2nd output is 3).

*/