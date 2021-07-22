class BooksApi {
  constructor({ baseUrl, headers, apiKey, settings }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._apiKey = apiKey;
    this._settings = settings;
  }

  // Получить фильмы
  getBooks(books, searchSort, searchCategory) {
    return fetch(
      `${this._baseUrl}${books}+subject:${searchCategory}&maxResults=${this._settings.maxResults}&orderBy=${searchSort}&key=${this._settings.apiKey}`,
      {
        headers: this._headers,
      }
    ).then((response) => this._checkRequestResult(response));
  }

  _checkRequestResult(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Возникла ошибка: ${response.status}`));
  }

  errorHandler(error) {
    console.log(error);
  }
}

const booksApi = new BooksApi({
  baseUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
  headers: {
    'Content-Type': 'application/json',
  },
  settings: {
    apiKey: 'AIzaSyBcE5HnWDendaZl3zQMRKnz28dyxHV-iHo',
    maxResults: '30',
  },
});

export default booksApi;
