import React from 'react';
import './Header.css';

class Header extends React.Component {
  render () {
    return (
      <>
      <section id='home' class="canvasFlex">
      <div id="canvasImg">
      <canvas id="myCanvas" width="100" height="200" style={{ border:'1px solid black'}}></canvas>
      </div>
      </section>


      {/* <h1>Hello, I'm Qaalid Hashi.</h1>
      <h2>I am a full-stack developer.</h2> */}
      </>
    )
  }
}

export default Header;