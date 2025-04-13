console.log(foo);
foo();
var foo = 10;
function foo() {
  console.log("print from foo");
}
console.log(foo);
foo();

/* 
Output:
[Function: foo]
print from foo
10
foo();
^
TypeError: foo is not a function

Why?

function foo() { ... } is hoisted first and fully defined at the top of the scope as a function.
var foo is hoisted next, but only the declaration is hoisted—not the assignment (foo = 10). Initially, foo is the function.
(function declarations take precedence)

 */