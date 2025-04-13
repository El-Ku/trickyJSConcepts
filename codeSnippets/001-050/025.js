console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);   // or console.log(undefined == null);

/*
Output:
object
undefined
false
true

Why?

Historically, JavaScript’s typeof null returns "object" due to a legacy bug 
in the language’s initial implementation (it cannot be fixed without breaking existing code).
So, to check for null, you should use === null instead of typeof operator.

null == undefined is true because == is the loose equality operator in JavaScript, 
which performs type coercion before comparison. In this case, both null and undefined 
are coerced to undefined before comparison, and since they both have the same value, the comparison returns true. 

*/