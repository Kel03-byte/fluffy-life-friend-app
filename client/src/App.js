// The Beginning of React building the website

import './App.css';
import Nav from './components/nav-bar'
import SideBar from './components/side-bar'
import Header from './components/header'
import Cats from './pages/cat-viewing/cats/cats-page'
import SignUp from './pages/cat-worker/sign-up/sign-up-page'
import SignIn from './pages/cat-worker/sign-in/sign-in-page'
import AddCat from './pages/cat-worker/add/add-cat-page'
import Single from './pages/cat-viewing/single-cat/single-cat-page'
import EditPage from './pages/cat-worker/edit/edit-cats/edit-page'
import EditCat from './pages/cat-worker/edit/single-cat/edit-cat'
import Resource from './pages/resources/resource'

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from './pages/home/home-page'
import Footer from "./components/footer";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Nav />
                <SideBar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/cats" component={Cats}></Route>
                    <Route exact path="/login" component={SignIn}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                    <Route exact path="/add" component={AddCat}></Route>
                    <Route exact path="/edit" component={EditPage}></Route>
                    <Route exact path="/resources" component={Resource}></Route>
                    <Route exact path="/edit/:id" component={EditCat}></Route>
                    <Route exact path="/:id" component={Single}></Route>
                </Switch>
                <Footer />
            </Router>
        </ApolloProvider>
    )
}

export default App;