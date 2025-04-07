obj = {
    size: 10,
    getSize() {
        console.log(this.size)
    }
};
console.log(obj.getSize());

/*
Output:
10
undefined

Why?
The getSize() function prints 10 into console. But it doesn't return anything. So the explicit outer 
console.log prints what is returned, which is undefined, into the console.

*/