let x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();

/*
Output:
undefined

Why?
Variable x at line 7 is still hoisted even though the if condition will never execute. 
Which means it hoists and shadows the global variable.

*/