'use strict';

export class UnsplashAPI {
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  #BASE_URL = 'https://api.unsplash.com';

  baseSearchParams = {
    per_page: 12,
    color: 'black_and_white',
    client_id: this.#API_KEY,
  };

  page = 1;

  query = null;

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      ...this.baseSearchParams,
      query: this.query,
      page: this.page,
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
