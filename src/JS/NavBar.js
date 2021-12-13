import React from 'react';
import '../CSS/resetCss.css'
import '../CSS/NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {
  render () {
    return (
      <>
      <section id='navbarSection'>
        <Navbar id="navbarParent">
          <Container className="navbarContainer">
            {/* <Navbar.Brand className="brandName">Welcome!</Navbar.Brand> */}
            <Button variant="secondary" className="links" href="/">Home</Button>
            <Button variant="secondary" className="links" href="/aboutMe">About Me</Button>
            <Button variant="secondary" className="links" href="/">Portfolio</Button>
            <Button variant="secondary" className="links" href="https://github.com/qhashi">Github</Button>
            <Button variant="secondary" className="links" href="https://www.linkedin.com/in/qaalidhashi">LinkedIn</Button>
          </Container>
        </Navbar>
      </section>
      </>
    )
  }
}

export default NavBar;