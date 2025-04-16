Promise.resolve()
  .then(() => {
    return new Promise((resolve, reject) => {
      reject("Inner error");
    }).catch((error) => {
      console.log(error); // First log
      throw "Outer error";
    });
  })
  .catch((error) => {
    console.log(error); // Second log
  });

/*
Output:
Inner error
Outer error

*/
