import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

import { BookTable } from './components/book-table';
import { BookForm } from './components/book-form';

const GET_ALL_BOOKS_QUERY = gql`
  query AllBooks {
    books { id, isbn, title, price }
  }
`;

const INSERT_BOOK_MUTATION = gql`
mutation InsertBook($book: BookInput) {
  insertBook(book: $book) {
    id
    title
    price
    isbn
  }
}
`;


class App extends Component {

  render() {

    return <div>
      <Query
        query={GET_ALL_BOOKS_QUERY}
        fetchPolicy="network-only"
      >
        {({ loading, data }) => {
          if (loading) {
            return <div>Loading...</div>;            
          } else {
            return <BookTable books={data.books} />;
          }
        }}
      </Query>
      <Mutation
        mutation={INSERT_BOOK_MUTATION}
        refetchQueries={[{ query: GET_ALL_BOOKS_QUERY, fetchPolicy:'network-only' }]}>
        {(insertBook) =>
          <BookForm onSubmit={book => insertBook({ variables: { book }})} />}
      </Mutation>
    </div>;
  }
}

export default App;
