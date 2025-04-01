for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

/* Output"
3
3
3

Why?

var i is function-scoped (or globally scoped here), not block-scoped. By the time the 
setTimeout callbacks execute (after the loop finishes), i has already reached its final value of 3.

Fix is to use `let` instead of `var` since its block scoped.

*/

