import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AboutMe from './AboutMe.js';

function App() {
  return (
    <>

    

    <h1>Welcome to Qaalid's Website!</h1>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Brand href="#AboutMe">AboutMe</Navbar.Brand>
    </Navbar>
    </>
  );
}

export default App;
