const obj = Object.freeze({ x: 1, y: { z: 2 } });
obj.x = 10;
obj.y.z = 20;
console.log(obj.x, obj.y.z);

/*
Output:
1 20

Why?
Object.freeze(obj) makes the top-level object immutable, preventing changes to obj.x 
(so obj.x = 10 fails silently). However, it’s a shallow freeze—nested objects like obj.y 
remain mutable. Thus, obj.y.z = 20 succeeds, updating the nested property. 


*/