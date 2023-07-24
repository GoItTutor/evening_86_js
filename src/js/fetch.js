'use strict';

// https://habr.com/ru/post/495698/

// https://jsonplaceholder.typicode.com/

const BASE_URL = 'https://jsonplaceholder.typicode.com';

let result = null;

fetch(`${BASE_URL}/users?_sort=name&_limit=9`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    result = data;

    console.log(data);
  })
  .catch(console.warn);
