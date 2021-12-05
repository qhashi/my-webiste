import React from 'react';
import './Header.css';
import zongnan from './images/zongnan.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

class Header extends React.Component {
  render () {
    return (
      <>
      {/* <section id='home' class="canvasFlex">
      <div id="canvasImg">
      <canvas id="myCanvas" width="100" height="200" style={{ border:'1px solid black'}}></canvas>
      </div>
      </section> */}
      <section id="sectionHeader">
      {/* <img src={zongnan} alt="zongnan" id="zongnan"/> */}
      <div id='headerPic'>
        <figure className="position-relative">
          <img src={zongnan} alt="zongnan" id="zongnan" className="img-fluid"/>
          <figcaption id="figName">
            Hello, I'm Qaalid Hashi.
          </figcaption>
          <figcaption id="figTitle">
            I am a full-stack developer.
          </figcaption>
        </figure>
      </div>
      </section>
      <section id='title'>
      </section>
      </>
    )
  }
}

export default Header;