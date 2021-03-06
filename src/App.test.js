import React from 'react'
import { render } from '@testing-library/react'
import { 
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider
} from '@apollo/client'
import App from './App'
import { Provider } from './store'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

test('Renders Chuck Facts h1', () => {
    const { getByText } = render(
        <ApolloProvider client={client}>
            <Provider>
                <App />
            </Provider>
        </ApolloProvider>
    );
    const styledH1 = getByText(/Chuck/i)
    expect(styledH1).toBeInTheDocument()
})

test('Check for h1 decendant', () => {
    const { getByText, getByTestId } = render(
        <ApolloProvider client={client}>
            <Provider>
                <App />
            </Provider>
        </ApolloProvider>
    );
    const styledH1 = getByText(/Facts/i)
    const emoji = getByTestId('emoji')
    expect(styledH1).toContainElement(emoji)
})
