console.log(0.1 + 0.2 == 0.3);

/*
Output:
false

Why?

JavaScript uses IEEE 754 double-precision floating-point numbers, which can’t precisely represent all decimals.

Calculation:
0.1 + 0.2 ≈ 0.30000000000000004 (due to binary approximation).

0.3 is stored as exactly 0.3, but the sum isn’t.

Strict Equality: 0.30000000000000004 !== 0.3, so false.



*/