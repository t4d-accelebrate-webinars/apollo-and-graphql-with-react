import React, { Component } from 'react';

export class BookTable extends Component {

  render() {

    return <div>
        <h2>Books</h2>
        <table>
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {this.props.books.map(book => <tr key={book.id}>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.price}</td>
                </tr>)}
            </tbody>
        </table>
    </div>;
  }
}
