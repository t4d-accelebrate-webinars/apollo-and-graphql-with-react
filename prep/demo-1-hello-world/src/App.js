import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const client = new ApolloClient({
      uri: 'http://localhost:3030/graphql',
    });

    client.query({
      query: gql`
        query MyApp {
          message
        }
      `,
    })
      .then(data => console.log(data))
      .catch(error => console.error(error));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
