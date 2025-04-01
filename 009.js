let funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs[0]();
funcs[1]();
funcs[2]();

/* 
Output:
3
3
3

Why?

Closure: Each function in funcs closes over the same i. 
By the time the functions are called (after the loop), 
i has already reached its final value of 3 (loop exit condition: i < 3 fails when i = 3).

 */