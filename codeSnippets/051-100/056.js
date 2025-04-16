Promise.all([]).then((results) => {
  console.log(results); // What’s logged?
});

/*
Output:
[]

Why?
Promise.all always resolves with an array of results, even if there are no inputs.

*/
