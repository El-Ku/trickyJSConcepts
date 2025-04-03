const arr = [1, 2, 3];
arr.length = 1;
console.log(arr);

arr.length = 5;
console.log(arr);
console.log(arr[1]);

/*
Output:
[ 1 ]
[ 1, <4 empty items> ]
undefined

Why?

Setting array length smaller, removes elements; 
setting it larger creates sparse arrays. 
Accessing empty slots (e.g., arr[1]) returns undefined.

*/