import React from 'react';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Queue from './components/Queue';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="big-main-content">
        <MainComponent />
        <Queue />
      </div>
    </div>
  );
};

export default App;
