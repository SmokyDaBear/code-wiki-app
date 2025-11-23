# Promises

Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, later, or never. A Promise can be in one of three states: pending, fulfilled, or rejected.

- Asynchronous operations allow your program to continue running while waiting for an operation to complete, such as fetching data from a server or reading a file.

## Creating a Promise

The `Promise` constructor is used to create a new Promise. It takes a single argument: a function called the executor, which has two parameters: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```

## Consuming a Promise

To handle the result of a Promise, you can use the `then()` and `catch()` methods.

- then(): This method is called when the Promise is fulfilled. It takes a callback function that receives the resolved value.
- catch(): This method is called when the Promise is rejected. It takes a callback function that receives the error reason.

```javascript
myPromise
  .then((result) => {
    console.log(result); // Output: Operation was successful!
  })
  .catch((error) => {
    console.error(error); // Output: Operation failed.
  });
```

then() functions can be chained to handle multiple asynchronous operations in sequence.

```javascript
myPromise
  .then((result) => {
    console.log(result);
    return "Next operation";
  })
  .then((nextResult) => {
    console.log(nextResult); // Output: Next operation
  })
  .catch((error) => {
    console.error(error);
  });
```

## Set Timeout

You can create a promise that resolves after a certain amount of time using `setTimeout`.

This is useful for simulating delays or timeouts in asynchronous operations during development.

Great for:

- Simulating network requests
- Testing loading states in UI components

Set Timeout Takes in 2 arguments:

- a callback function to be executed after the delay
- a time in milliseconds

After the timeout, it executes the callback function and returns a promise that resolves after that time has passed.

```javascript
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms} milliseconds`);
    }, ms);
  });
};
delay(2000).then((message) => {
  console.log(message); // Output: Resolved after 2000 milliseconds
});
```

In production code, timeouts can be useful for:

- Implementing retry logic for network requests
- Creating loading indicators that appear after a certain delay
- UI Components that need to wait before rendering or updating like a slideshow or carousel

## Promise Prototype Methods

The Promise prototype includes several useful methods for working with multiple promises:

- Promise.resolve()
- Promise.reject()
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

### Promise.resolve(value)

Creates a Promise that is resolved with the given value.

```javascript
const resolvedPromise = Promise.resolve("Resolved value");
resolvedPromise.then((value) => {
  console.log(value); // Output: Resolved value
});
```

### Promise.reject(reason)

Creates a Promise that is rejected with the given reason.

```javascript
const rejectedPromise = Promise.reject("Rejection reason");
rejectedPromise.catch((reason) => {
  console.error(reason); // Output: Rejection reason
});
```

### Promise.all(iterable)

Waits for all promises in the iterable to be fulfilled, or for any to be rejected. Returns a new promise that resolves to an array of the results.
Takes in an iterable (like an array) of promises and returns a single Promise that resolves when all of the promises in the iterable have resolved, or rejects if any of the promises reject.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: [3, 42, "foo"]
});
```

### Promise.allSettled(iterable)

Waits for all promises in the iterable to settle (either fulfilled or rejected). Returns a new promise that resolves to an array of objects describing the outcome of each promise.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((_, reject) => {
  setTimeout(reject, 100, "error");
});
Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results);
  // Output:
  // [
  //   { status: "fulfilled", value: 3 },
  //   { status: "rejected", reason: "error" }
  // ]
});
```

### Promise.race(iterable)

Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

```javascript
const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // Output: "two"
});
```

### Promise.any(iterable)

Returns a promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If all promises are rejected, it rejects with an AggregateError.

```javascript
const promise1 = Promise.reject("error1");
const promise2 = Promise.reject("error2");
const promise3 = Promise.resolve("success");
Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // Output: "success"
  })
  .catch((error) => {
    console.error(error);
  });
```
