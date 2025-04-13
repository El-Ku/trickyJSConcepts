// Implement calc
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total)

/*
Output:
const calc = {
    total: 0,
    add: function(a) {
        this.total += a;
        return this;
    },
    multiply: function(a) {
        this.total *= a;
        return this;
    },
    subtract: function(a) {
        this.total -= a;
        return this;
    }
}

Why?
The calc object should have methods that return `this`, and a final total property to access the result.

*/