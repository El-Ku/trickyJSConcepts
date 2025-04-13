console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

/*
Output:
false
true

Why?

In IEEE 754 (used by JS), NaN is not equal to itself by definition.
Object.is is a stricter comparison that treats NaN as equal to NaN (unlike ===).

NaN’s inequality with itself is a mathematical quirk; use isNaN() or Object.is() for reliable checks.

*/