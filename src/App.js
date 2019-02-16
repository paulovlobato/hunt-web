import React, { Component } from 'react';
import Header from './components/Header';
import './styles.css';
import Main from './pages/main'
import Routes from './routes';

const App = () => (
  <div className="App">
     <Header></Header>
     <Routes></Routes>
  </div>
);

export default App;
