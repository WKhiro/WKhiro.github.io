import React from 'react';
import { Cat } from './components/Cat';
import city from './assets/clouds.jpg';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js';

const Styles = styled.div`

.box{
  background:linear-gradient(rgba(250,0,0,0.5),transparent);
  background-color:purple; /*this your primary color*/
  background-size: cover;
  position:fixed;
  width:100%;
  height:100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index:-3;
}
.part {
  position: absolute;
top: 0;
left: 0;
z-index: 0;
}
  .divx {

position:fixed;
    /*background: url(${city}) no-repeat fixed bottom;*/
    opacity:0.8;
  /*  background-color:#ccc;*/
    background-size: cover;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:-3;
  }
  .divy {
        position: relative;
  }
  .textx {
    color: white;
    text-shadow: 2px 2px 4px black;
      border-style: solid;
      padding: 50px;
  }
  .texty {
      color: white;
      text-shadow: 2px 2px 4px black;
      border-style: solid;
      padding: 50px;
      margin-left: 20px;
  }
  .reference {
    text-align: center;
    color: white;
  }
  .main {
    text-align: center;
  }
`;

export const About = () => (
  // return () here is removed due to ^
  <Styles>
  <div className="part">
  <Particles className="box"
  params={{

    particles: {
      color: {
        value: "#FFFFFF"
      },
      line_linked: {
        color: {
          value: "#33A3FF"
        }
      },
      number: {
        value: 50,
        density: {
  enable: true,
  value_area: 600 // denser the smaller the number
}
      },
      size: {
        value: 3
      }
    }
  }}
/>
</div>
    <Container className="divy">
      <Row>
        <Col className="textx">
          <h1 className="main"> Welcome! </h1>
          <p> This is my personal website. I either linked you here myself, or you got here via my GitHub. Either way, you'll find personal information, projects, and other random posts I decide to make here.</p>
        </Col>
        <Col className="texty">
          <h1 className="main"> About Me </h1>
            <h3> Who Am I? </h3>
            <p> I'm Wesley. </p>
            <h3> Alma Mater </h3>
            <ul>
              <li> University of California - San Diego </li>
              <li> B.S. in Computer Science (Spring 2020) </li>
            </ul>
            <h6> Favorite Courses </h6>
            <ul>
              <li> Artificial Intelligence </li>
              <li> Computer Security </li>
              <li> Computer Graphics </li>
            </ul>
            <h3> Hobbies and Interests </h3>
            <p> I was an active member of the UCSD Badminton Team; I've played badminton for my respective school team for 8 years. I also play badminton outside of school recreationally.</p>
            <p> I'm also an avid gamer; I mostly enjoy playing League of Legends and Nintendo games. </p>
        </Col>
      </Row>
    </Container>
    <div className="reference">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </Styles>
)
