import React, { Component } from 'react';
import Header from './sections/Header';
import Portfolio from './sections/Portfolio.js';
import Contact from './sections/Contact.js';
import Footer from './sections/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
