// // https://www.weatherbit.io/api

// 'use strict';

// import { getWeatherDataByCityName } from './weather-api';

// import weatherCardTemplate from '../templates/weather-card.hbs';

// const weatherFormEl = document.querySelector('.js-search-form');
// const weatherWrapperEl = document.querySelector('.weather__wrapper');

// const convertSecondsToHoursAndMinutes = seconds => {
//   const date = new Date(seconds * 1000);

//   return `${`${date.getHours()}`.padStart(
//     2,
//     0
//   )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
// };

// const handleWeatherFormSubmit = event => {
//   event.preventDefault();

//   const searchQuery = event.target.firstElementChild.value.trim();

//   if (!searchQuery) {
//     return;
//   }

//   getWeatherDataByCityName(searchQuery)
//     .then(data => {
//       data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
//       data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);

//       weatherWrapperEl.innerHTML = weatherCardTemplate(data);
//     })
//     .catch(console.warn);
// };

// weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);

// function getPowedNumber(baseNumber, pow) {
//   if (pow === 0) {
//     return 1;
//   }

//   if (pow === 1) {
//     return baseNumber;
//   }

//   return baseNumber * getPowedNumber(baseNumber, pow - 1);
// }
const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList.innerHTML = markup;
}
