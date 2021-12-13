import React from 'react';
import '../CSS/resetCss.css'
import '../CSS/Header.css';
import NavBar from './NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
  render () {
    return (
      <>
      <NavBar bg="dark"/>
        <section id="sectionHeader">
          <div id='headerPic'>
            {/* Image in CSS */}
          </div>
        </section>    
      </>
    )
  }
}
// className="img-fluid"
export default Header;