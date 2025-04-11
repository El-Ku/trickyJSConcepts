function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

/*
Output:
{ name: 'Alex', age: 25 }
{ name: 'John', age: 50 }

Why?
    The reference to personObj1 is passed to the changeAgeAndReference function.
So the person.age = 25; statement modifies the 'age' property of the passed object.
Then a new object is assigned to the person variable which is then returned.
Reassigning the parameter to a new object does not affect the object at the original reference.
*/