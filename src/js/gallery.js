'use strict';

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const handleSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.query = searchQuery;
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotos()
    .then(({ data }) => {
      if (!data.results.length) {
        console.log('Images not found!');
        return;
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);
      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const handleLoadMoreBtnClick = () => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotos()
    .then(({ data }) => {
      if (unsplashApi.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
