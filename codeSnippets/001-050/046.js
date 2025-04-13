//Without using "let" keep the variables inside block scoped. The console statement should return a referenceError
function show() {
    {
        var a = 10;
        var b = 20;
    }
    console.log(a,b);
}
show();  //10 20

/*
Answer:
function show() {
    (function() {
        var a = 10;
        var b = 20;
    })()
    console.log(a,b);
}
show();  //ReferenceError: a is not defined

This is done by using an IIFE(Immediately Invoked Function Expression).

*/
