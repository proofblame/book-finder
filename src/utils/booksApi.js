class BooksApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Получить фильмы
  getBooks(books) {
    return fetch(`${this._baseUrl}${books}&maxResults=30&key=AIzaSyBcE5HnWDendaZl3zQMRKnz28dyxHV-iHo`, { 
      headers: this._headers 
    
    }).then(
      (response) => this._checkRequestResult(response)
    );
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
});

export default booksApi;
