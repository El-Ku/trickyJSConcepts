const arr = [1, 2, 3];
arr[5] = 5;
console.log(arr.length);
console.log(arr);
console.log(arr[3]);

/*
Output:
6
[ 1, 2, 3, <2 empty items>, 5 ]
undefined

Why?
Setting arr[5] = 5 when the array’s length is 3 extends the array to length 6. 
JavaScript fills the gaps (indices 3 and 4) with "empty slots" (not undefined, but truly empty).

Accessing arr[3] or arr[4] returns undefined in console output, but they’re not explicitly set.

*/