import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BooksData } from './services/books-data';

const booksData = new BooksData('http://localhost:3030/graphql');

booksData.all().then(books => {
    ReactDOM.render(<App books={books} />, document.getElementById('root'));
});

