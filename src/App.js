import './CSS/resetCss.css';
import './CSS/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './JS/AboutMe.js';
import Header from './JS/Header.js';

function App() {
  return (
    <>
    <Header />
    <AboutMe />
    </>
  );
}

export default App;
