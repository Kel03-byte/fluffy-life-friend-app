// The beginning of React building the website

import React from "react";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main-page'

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;