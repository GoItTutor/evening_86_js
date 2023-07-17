'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

// Стек виклику функцій
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 700);

// setTimeout(() => {
//   console.log(3);
// }, 700);

// console.log(4);

// let seconds = 1;

// setInterval(() => {
//   console.log(seconds);

//   seconds += 1;
// }, 1000);

// const ID = setTimeout(() => {
//   console.log(`Hello!`);
// }, 1000);

// // console.log(ID);

// setTimeout(() => clearTimeout(ID), 1001);

// const ID = setInterval(() => {
//   console.log(`Hello!`);
// }, 1000);

// // console.log(ID);

// setTimeout(() => clearInterval(ID), 2999);

// Очищення інтервалів і таймаутів clearInterval(intervalID), clearTimeout(timeoutID)
