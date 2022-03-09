import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

//Creation Apollo Client
const client = new ApolloClient({
  uri: 'https://swapi.loquenecesito.co/graphql/',
  cache: new InMemoryCache()
});
ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root')
);