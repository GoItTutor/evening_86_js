'use strict';

/*
 * async/await
 * асинхронна (async) функція Завжди повертає проміс.
 * await змушує функцію чекати виконання промісу.
 * await не можна використовувати поза асинхронними функціями.
 * try/catch для відлову помилок
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

//? TASK 01
// Перепиши функцію на синтаксис async/await

// const loadPosts = url => {
//   return fetch(url).then(postsResponse => {
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   });
// };

// loadPosts(`${BASE_URL}/posts`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function func() {
//   wait();
//   // ...що тут написати?
//   // щоб викликати wait() та дочекатися результату "10" від async–функції
//   // не забувайте, тут не можна використовувати "await"
// }

// func();
