console.log(+"2" + +"3");


/*
Output:
5

Why?

The unary + operator converts its operand to a number.
+"2" → Number("2") → 2.
+"3" → Number("3") → 3.

So we get, 2+3=5.

*/