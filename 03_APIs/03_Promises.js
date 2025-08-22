// The working of Promise is divided into 2 Parts:
// 1. Create a Promise
// 2. Consumption of a Promise

// 1)
/*
const promiseOne = new Promise(function(resolve, reject) {
    // Do Async Tasks
    setTimeout(() => {
        console.log("Async Task Performed.");
        resolve()
    }, 1000);
});

// .then is directly connected to the resolve and/or reject
promiseOne.then(function() {
    console.log("Promise Is Consumed.");
});
*/

// 2)
/*
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Second Promise Created.");
        resolve()
    }, 2000);
}).then(function() {
    console.log("Second Promise Consumed");
});
*/

// 3)
/*
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "Deep",
      email: "deep@google.com",
      password: "Deep@123",
    });
  }, 1000);
});

promiseThree.then(function (userData) {
    console.log(userData);
});
*/

// 4) Promise Chaining
const promiseFour = new Promise(function (resolve, reject) {
  const isError = true;

  if (!isError) {
    setTimeout(() => {
      resolve({
        username: "Deep",
        email: "deep@google.com",
        password: "Deep@123",
      });
    }, 1000);
  } else {
    reject("ERROR: Something went wrong");
  }
});

promiseFour
  .then((userData) => {
    console.log(userData);
    return userData.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Always Run"));
