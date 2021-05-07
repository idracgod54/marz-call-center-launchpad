import NavBar from './components/nav';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <React.Fragment>
      <NavBar />
      <main className="container">

      </main>
      </React.Fragment>
    );
  }
}

export default App;
