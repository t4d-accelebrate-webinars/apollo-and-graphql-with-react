import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    console.dir(this.props);

    return (
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map(book => <tr>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.price}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}

export default App;
