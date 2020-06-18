import React from 'react';
import { Cat } from './components/Cat';
import city from './assets/clouds.jpg';
import styled, { keyframes } from 'styled-components';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-flexbox-grid';
import Particles from 'react-particles-js';
import { Spring } from 'react-spring/renderprops';
import { FaLinkedin, FaGithub, FaCopyright, IconContextProvider } from "react-icons/fa";
import { IconContext } from "react-icons";

const Texts = styled.p`
.testas
{
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 1));
  margin-right: 10px;
}
`;

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
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px black;
  }
  .copyx {
    margin-bottom: 20px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px black;
  }
  a {
    color: aqua;
    text-decoration: none;
  }
  .main {
    text-align: center;
  }
`;

export const Home = () => (
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
      <Row top='xs'>
      {/* 1000 is a second */}
        <Spring from={{opacity:0}}
        to={{opacity:1}}
        config={{delay:100, duration: 1000}}>
        {props =>
        <Col xs className="textx" style={props}>
          <h1 className="main"> Welcome! </h1>
          <p>
            This is my personal website. I either linked you here myself,
            or you got here via my GitHub. Either way, you'll find personal
            information, projects, and other random posts I decide to make here.
          </p>
          <Texts>
          <IconContext.Provider value={{ size: '1.5em' }}><FaLinkedin className="testas"/></IconContext.Provider> LinkedIn
          </Texts>
          <Texts>
          <IconContext.Provider value={{ size: '1.5em' }}><FaGithub className="testas"/></IconContext.Provider> GitHub
          </Texts>
        </Col>}
        </Spring>
        <Spring from={{opacity:0}}
        to={{opacity:1}}
        config={{delay:500, duration: 1000}}>
        {props =>
        <Col xs className="texty" style={props}>
          <h1 className="main"> About Me </h1>
            <h3> Who Am I? </h3>
            <p> I'm Wesley. I'm a fresh graduate, and an aspiring software
            engineer. Besides pursuing formal education in Computer Science
            through university courses, I began my journey into
            software development by tinkering around with technologies I found
            interesting to me, such as ReactJS, Unity, and Android Studio.
            </p>
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
            <p> I love playing video games and badminton. I was an active member of the UCSD Badminton Team; I've played badminton for my respective school team for 8 years. I also play badminton outside of school recreationally.</p>
            <p> I'm also an avid gamer; I mostly enjoy playing League of Legends and Nintendo games. </p>
        </Col>
      }
      </Spring>
      </Row>
      <div className="reference">Favicon is made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div className="copyx"><Texts><IconContext.Provider value={{ size: '1.5em' }}><FaCopyright className="testas"/></IconContext.Provider>2020 Wesley Kok</Texts></div>
    </Container>
  </Styles>
)
