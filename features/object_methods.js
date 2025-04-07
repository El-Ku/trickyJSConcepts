const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(obj);  //{ a: 1, b: 2, c: 3 }

console.log(Object.keys(obj));   //[ 'a', 'b', 'c' ]

console.log(Object.values(obj));    //[ 1, 2, 3 ]

console.log(Object.entries(obj));   //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Copy properties from one object to another.
const target = {};
Object.assign(target, obj);
console.log(target);   //{ a: 1, b: 2, c: 3 }
obj.c = 4;  //its fully copied. both have different references in memory.
console.log(obj.c, target.c);   // 4 3

// Prevents modifications. Once its frozen it cannot be unfreezed.
Object.freeze(obj);
obj.c = 3;
console.log(obj.c);  //still prints 4



