let person = {name: "Lydia"};
let arr = [person];
person = null;
console.log(arr);

/*
Output:
[ { name: 'Lydia' } ]

Why?
person originally points to { name: "Lydia" }.
arr gets a reference to that same object in its first element.
Then person = null just reassigns the variable person — it does not affect what's in arr.
The object still exists in memory because arr[0] is still referencing it.

*/