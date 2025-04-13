(function () {
  var a = b = 3;
})();

console.log(typeof a); // ?
console.log(b, typeof b); // ?

/*
Output:
undefined
3 number

Why?
a = b = 3 assigns 3 to b first — but without var/let/const, b becomes global.
Then a is declared locally with var.
So outside the function:
    a is not defined (error avoided by typeof)
    b is global and equals 3.
*/
