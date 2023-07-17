'use strict';
// Створення нової дати

// const date = new Date(1000);

// console.dir(date);

// Методи дат

// const currentDate = new Date();

// currentDate.setFullYear(2000);
// currentDate.setMonth(1);

// console.log(currentDate);
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

// const date = new Date(1900, 1, 20, 3, 12);

// console.log(date);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const weekDays = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

// const getWeekDay = date => {
//   console.log(weekDays[date.getDay()]);
// };

// getWeekDay(new Date(2023, 6, 18));

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   setTimeout(() => {
//     console.log('loh');
//   }, 3000);
// });

const obj = {
  //   color: { hex: '#000', regular: 'black' },
  friends: [],
  isAdmin: false,
};

console.log(obj?.color?.hex);
