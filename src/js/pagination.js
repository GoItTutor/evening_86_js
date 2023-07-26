'use strict';

import { JSONPlaceholderAPI } from './jsonplaceholder-api';

import createPostsCards from '../templates/posts.hbs';

const POSTS_COUNT = 100;

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonplaceholderInstance = new JSONPlaceholderAPI();

jsonplaceholderInstance
  .fetchPosts()
  .then(data => {
    postsWrapperEl.innerHTML = createPostsCards(data);

    loadMoreBtnEl.classList.remove('is-hidden');
  })
  .catch(console.warn);

const handleLoadMoreBtnClick = () => {
  jsonplaceholderInstance.page += 1;

  const { limit, page } = jsonplaceholderInstance;

  if (POSTS_COUNT <= limit * page) {
    loadMoreBtnEl.classList.add('is-hidden');
  }

  jsonplaceholderInstance
    .fetchPosts()
    .then(data => {
      postsWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(console.warn);
};

loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
