'use strict';

/*
 * Проміси
 */

// console.log(1);

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve('Success');
//   } else {
//     reject('Error');
//   }
// });

// console.log(promise);

// console.log(2);
//? конструктор new Promise(callback(resolve, reject));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Success');
    } else {
      reject('Error');
    }
  }, 250);
});

// console.log(promise);

//? then(onSuccess, onError)

promise
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.warn(err);
  })
  .finally(() => {
    console.log('Completed!');
  });

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   console.log(`ss`);
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
