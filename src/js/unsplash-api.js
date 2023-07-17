'use strict';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  page = 1;
  query = null;

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: 12,
      color: 'black_and_white',
      client_id: this.#API_KEY,
    });

    return fetch(`${this.#BASE_URL}/search/photos?${searchParams}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      }
    );
  }
}
