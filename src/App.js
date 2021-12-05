import './CSS/resetCss.css';
import './CSS/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AboutMe from './AboutMe.js';
import Header from './JS/Header.js';
import NavBar from './JS/NavBar.js';

function App() {
  return (
    <>
    <Header />
    <NavBar />
    {/* <AboutMe /> */}
    </>
  );
}

export default App;
