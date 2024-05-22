# Why Error Handling is important with promises 
### Error Handling
* It is the process of detection and resolution of application errors, programming errors or communication errors.
* Error handling helps in maintaining the normal flow of program execution.
* There are two ways in which  we can handle errors in our promise chain.
* 1.  By passing an error handler to `then` block 
* 2. or using the `catch` operator.
* Example

```
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("an error has occurred");
    }, 2000)
});

myPromise.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error); 
});
```
* In the above example, then has two callbacks. The first one is a success handler, and the second is an error handler. 
* If the success handler ends in an error, we will not catch or handle it.
* To over come this, we use the `catch` operator.

```
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("an error has occurred");
    }, 2000)
});

myPromise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error); 
});
```

* For the chain of promises we can use a `catch` operator as
```
const waitForMe = function (name) {
    return new Promise((resolve, reject) => {
        if (name === "Arjit") {
            return reject("Arjit is always on time");
        } else {
            setTimeout(() => {
                return resolve(name);
            }, 2000);
        }
    });
}

waitForMe("Shreya")
    .then((data) => {
        console.log(data);
        return waitForMe("aniee");
    })
    .then((data) => {
        console.log(data);
        return waitForMe("Arjit");
    })
    .then((data) => {
        console.log(data); 
        return waitForMe("Vikas");
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

```
* There are two key operators that promises have, which are suited for specific conditions: `Promise.all` and `Promise.race`.
* `Promise.all`: allows us to run multiple async operations simultaneously (saving us time) but still wait for all of them to complete before executing the callback.
* Example
```
const waitForMe = function (name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(name);
        }, 2000);
    });
}

const firstPromise = waitForMe("Arjit");
const secondPromise = waitForMe("Shreya");
const thirdPromise = waitForMe("Aniee");
const fourthPromise = waitForMe("vikas");

Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise])
    .then((data) => {
        console.log(data);
    });
```

`Promise.race`: handles a unique case. When we would like to run multiple async operations at the same time, but not wait for all to complete. Instead, we want to execute callback as soon as the first one completes.
* Example

```
const waitForMe = function (name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(name);
        }, time);
    });
}

const firstPromise = waitForMe("Arjit", 4000);
const secondPromise = waitForMe("Shreya", 3000);
const thirdPromise = waitForMe("Aniee", 7000);
const fourthPromise = waitForMe("vikas", 5000);

Promise.race([firstPromise, secondPromise, thirdPromise, fourthPromise])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);


```





