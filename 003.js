var a = 10;
let b = 20;

function print1(a,b) {
    console.log(a,b);
}

function print2() {
    var a = 1000;
    let b = 2000; 
    console.log(a,b);
}

print1(a,b);

print2();

print1(a,b);

/*Guess the output?
10 20
1000 2000
100 200

Why? 

The variables declared inside print2 have local scope within the function's execution context. 
They cannot overwrite the variables declared in the parents context(even with the same names).
*/