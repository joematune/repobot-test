import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import { Provider } from './store'

// An instance of ApolloClient defining the base URI and cache policy
const client = new ApolloClient({
  uri: process.env.API_URL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

console.log('hereherehrer in index.tsx')

// ApolloProvider giving access to the client via ApolloConsumer
// Store Provider giving access to Global storage
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
