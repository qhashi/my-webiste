import React from 'react';
import '../CSS/resetCss.css'
import '../CSS/AboutMe.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import qImg from '../images/qImg.jpg';

class AboutMe extends React.Component {
  render (){
    return (
      <>
      <CardGroup id = 'group'>
        <Card style={{ width: '18rem' }} className="about-us-card" bg="dark">
          <Card.Img variant="top" id='qImg' src={qImg} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">Qaalid Hashi</Card.Title>
            <Card.Text className="card-text">
            Former security professional turned full-stack developer. Interested in front-end development and UI design. Passionate about learning new things, working with code, and coming up with clever and creative solutions.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </>
    )
  }
}

export default AboutMe;