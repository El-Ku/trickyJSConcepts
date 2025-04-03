let add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));
console.log(add(null, 10));

/*
Output:
3
7
11
10

Why?

Default Parameters: If an argument is omitted or explicitly passed as undefined, 
the default value is used. 
Explicit values (including null, null + 10 = 10) override the default.

Also note that positional arguments are matched in order.

*/