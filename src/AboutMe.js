import React from 'react';
import './AboutMe.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import qImg from './images/qImg.jpg';

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
            Background in Professional Security. Pursuing a career in Full-Stack Development. Last meal on Earth: Somali Rice and Chicken with Anjero.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </>
    )
  }
}

export default AboutMe;