const obj = {
    name: "vip",
    age: 30,
    experience: [
        {
            name: "matlab",
            expYears: 8
        },
        {
            name: "js",
            expYears: 1
        }
    ],
    anotherObj: {
        prop1: "prop value",
        prop2: 23
    },
    objObj: {
        obj2: {
            p1: "p11",
            p2: 45
        }
    }
}

const {age} = obj;
console.log(age);  //30

//assign to a different variable name
const {age: newVarName} = obj;
console.log(newVarName);  //30

//what if the property name doesnt exist inside the object?
const {noExistVar} = obj;
console.log(noExistVar);  //undefined

//object within an obj
const {anotherObj:{prop1}} = obj;
console.log(prop1);  //prop value

//object within an obj, but using a new variable name
const {anotherObj:{prop1: diffPropName}} = obj;
console.log(diffPropName);  //prop value

//Accessing array elements
const { experience: [firstExp] } = obj;
console.log(firstExp.name); // "matlab"

const { experience: [,secondExp] } = obj;
console.log(secondExp.name); // "js"

//Access object within an object.
const {objObj:{obj2:{p1}}} = obj; //use nested curly brackets.
console.log(p1);  // p11
const {objObj:{obj2:{p1: newP1Var}}} = obj;
console.log(newP1Var);  // p11

