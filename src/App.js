import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

import { BookTable } from './components/book-table';
import { BookForm } from './components/book-form';

class App extends Component {

  render() {

    return <div>
      <Query
        query={gql`
          query AllBooks {
            books {
                id
                isbn
                title
                authorId
                category
                price
                quantity
            }
          }
        `}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>;

          } else {
            return <BookTable books={data.books} />
          }
        }}
      </Query>
      <BookForm onSubmit={this.props.insertBook} />
    </div>;
  }
}

export default App;
