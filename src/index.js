import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import { BooksData } from './services/books-data';

const client = new ApolloClient({
    uri: 'http://localhost:3030/graphql'
});


// const booksData = new BooksData(client);

// const insertBook = book => booksData
//     .insert(book)
//     .then(() => refreshBooks());

// const refreshBooks = () => booksData.all().then(books => {
//     ReactDOM.render(<ApolloProvider client={client}>
//         <App books={books} insertBook={insertBook} />
//     </ApolloProvider>, document.getElementById('root'));
// });

const refreshBooks = () => {
    ReactDOM.render(<ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
};

refreshBooks();

