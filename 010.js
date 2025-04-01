console.log("2" + 2 - "1");
let a = "2" + 2 - "1";
console.log(typeof(a));

/* 
Output:
21
number


Why?

+ and - have the same precedence but are evaluated left-to-right.
'+' means concatenation when a string is involved.
So, "2" + "2" = "22".
- is a numeric operator, so both operands are coerced to numbers.
So, "22" → 22, "1" → 1.
22 - 1 = 21.

 */