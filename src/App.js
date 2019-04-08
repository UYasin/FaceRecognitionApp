import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import 'tachyons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      {/*<Logo />
      <ImageLink />
      <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
