const obj = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
  },
};

const {
  a,
  b,
  c: { a: nestedA },
} = obj;

console.log(a, b, nestedA);

/*
Output:
1 2 3

Why?

This code snippet uses destructuring assignment to extract values from the obj object. 
It extracts the properties a, b, and the nested property a from the c object and assigns 
them to the corresponding variables a, b, and nestedA, respectively.

*/
