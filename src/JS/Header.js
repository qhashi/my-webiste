import React from 'react';
import '../CSS/resetCss.css'
import '../CSS/Header.css';
import zongnan from '../images/zongnan.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
  render () {
    return (
      <>
      <section id="sectionHeader">
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
      </>
    )
  }
}

export default Header;