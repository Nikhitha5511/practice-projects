const promise1 = Promise.resolve('resolved')
promise1.then((value)=>console.log(value));

const promise2 = Promise.reject(new Error('rejected'))
promise2.catch(error=>console.error(error.message));