import React, {Component} from 'react';
import MainPage from './components/MainPage.js';
import './App.css';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-143912727-1');
  ReactGA.pageview('/');
}

class App extends Component {
  render(){
  initializeReactGA();

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
  }
}

export default App;
