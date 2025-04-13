// Write a program to count the number of times each character repeats in the string
const str = "hare krishna hare krishna krishna krishna hare hare";

const obj = {};
const str2 = str.replaceAll(" ","");  //remove all spaces
console.log(str2);
for(let i=0; i<str2.length; i++) {
    let char = str2[i];
    if(!obj[char])  //obj[char] is undefined if the object doesnt have that char
        obj[char] = 1;
    else
        obj[char] += 1;
}


console.log(obj);
//in then below line, I want to make sure that the original string length is equal to 
//the number of repeats found by the snippet.
console.log(Object.values(obj).reduce((acc, curr) => acc+=curr) == str2.length);

/*
Output:
harekrishnaharekrishnakrishnakrishnaharehare
{ h: 8, a: 8, r: 8, e: 4, k: 4, i: 4, s: 4, n: 4 }
true
*/
