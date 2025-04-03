for(var i=0; i<=3; i++) {
    console.log(i);
}
console.log(i);

/*
Output:
0
1
2
3
4

Note that the comparison happens first, and i is incremented only at the end of the loop.
If you use `let i`, `i` will be block scoped and line 4 will not work.

*/