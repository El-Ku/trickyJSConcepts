var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}

/*
Output:
1
2
3
4
5

Why?

The x++ is inside the setTimeout function. If it was outside, 5 would have been printed
5 times. Because x is a global variable and by the time the arrow function inside setTimeout
is moved to call stack, x would be already 5.

But in this case, x is incremented and then consoled. then incremented and consoled again etc..

*/