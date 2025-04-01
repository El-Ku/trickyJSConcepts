let a = 10;

function print() {
    let b = a;
    function inner(para1) {
        console.log(para1)
    }
    inner(b);
}

print();
a = 20;
print();

/* guess the output:
10
20

Why?

The current value of `a` is assigned to `b`.  Each time print is called, a fresh context is created and pushed to the callstack.
The context of print also contains its lexical environment, which is basically its parent's variables accessed by the function.
Note that when inner is called a new context is created and pushed to call stack as well.

When print finishes running, the declared 'b' is garbage collected. 

*/