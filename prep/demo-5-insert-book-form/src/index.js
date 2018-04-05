import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BooksData } from './services/books-data';

const booksData = new BooksData('http://localhost:3030/graphql');

const insertBook = book => booksData
    .insert(book)
    .then(() => refreshBooks());

const refreshBooks = () => booksData.all().then(books => {
    ReactDOM.render(<App books={books} insertBook={insertBook} />, document.getElementById('root'));
});

refreshBooks();

