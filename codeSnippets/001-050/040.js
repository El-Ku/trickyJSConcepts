function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
console.log(user.ref.name);

/*
Output:
undefined

Why?
In a standalone function call (makeUser()), `this` defaults to the global object (Window in browsers).
The returned object is { name: "John", ref: Window }, where ref points to the Window object.

console.log(user.ref === globalThis); prints `true`.
console.log(user.name); prints "John"

How to fix this? 
    Use a normal function to return the "this". It will set `this` from 
the object which it is called from which is user2 here.

*/

function makeUserFixed() {
  return {
    name: "John",
    ref: function () {
      return this;
    }
  };
}

let user2 = makeUserFixed();
console.log(user2.ref().name);  //prints John
console.log(user2.ref());  //{ name: 'John', ref: [Function: ref] }
