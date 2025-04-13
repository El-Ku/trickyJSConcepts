for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(() => console.log(i), 100);
  })(i);
}

/*
Output:
0
1
2

Why?
IIFE captures the current i value and passes it as a new scoped variable.
Arrow function inside setTimeout uses the IIFE's i, not the outer var i.

*/
