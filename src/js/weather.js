// https://www.weatherbit.io/api

'use strict';
// import weatherCardTemplate from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${date.getHours()}:${date.getMinutes()}`;
};

// weatherFormEl.addEventListener('submit', onWeatherFormSubmit);
