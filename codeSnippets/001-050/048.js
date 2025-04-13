var x = 10;

(function(x) {
  console.log(x); // ?
  var x = 20;
  console.log(x); // ?
})(x);


/*
Output:
10
20

Why?
    This is an IIFE function. When the IIFE is called, the parameter x inside 
the function is initialized with the value of the global x, which is 10.
Inside the function, local x gets hoisted to top of the code, but since is undefined, 
the first console.log prints the global value which is 10. 
The second console uses the locally initialized value of x which is 20

*/
