console.log({a:1} == {a:1});
console.log({a:1} === {a:1});

/*
Output:
false
false

Why?
JavaScript compares objects by reference, not value.
Each {a:1} creates a new object in memory.

*/