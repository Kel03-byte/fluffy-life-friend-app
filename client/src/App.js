// The beginning of React building the website

import React from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main-page'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        </ApolloProvider>
    )
}

export default App;