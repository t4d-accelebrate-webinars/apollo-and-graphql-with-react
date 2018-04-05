import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import { BookTable } from './components/book-table';
import { BookForm } from './components/book-form';

class App extends Component {

  render() {

    return <div>
      <BookTable books={this.props.books} /> 
      <BookForm onSubmit={this.props.insertBook} />
    </div>;
  }
}

export default App;
