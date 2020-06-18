import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-flexbox-grid';
import { Particles } from 'react-particles-js';
import { Spring } from 'react-spring/renderprops';
import { FaLinkedin, FaGithub, FaCopyright } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { IconContext } from "react-icons";
import styled, { keyframes } from 'styled-components';
import punch from './assets/punchy.png';

const Texts = styled.p`
.testas
{
  filter: drop-shadow(2px 2px 4px black);
  margin-right: 10px;
}
`;

const Padx = styled.h3`
.testax
{
  filter: drop-shadow(2px 2px 4px black);
  margin-left: 10px;
}
.lol
{
  display: inline;
}
`;
const ImgTest = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`;

const Styles = styled.div`

.gradient
{
  background: linear-gradient(rgba(250, 0, 0, 0.5), transparent), no-repeat;
  background-color: purple; /* primary color of gradient */
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  z-index: -3;
}

.gradientContainer
{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}

.divx
{
  opacity: 0.8;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -3;
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
  .textz {
      text-shadow: 2px 2px 4px black;
      border-style: solid;
      padding: 50px;
      display: flex;
      flex-direction: column;
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
    margin-bottom: 20px;
  }
`;

export const Blog = () => (
  <Styles>
    <div className="gradientContainer">
    {/* Value_area: smaller = denser clusters */}
      <Particles className="gradient" params={{
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
              value_area: 600
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
            or you got here via my GitHub. Either way, you can learn more about
            me by reading the section to the right, or look at my blog or
            projects page. <br/><br/>Here are some handy links if you want to view my
            LinkedIn or my projects directly on Github!
          </p>
          <Texts>
          <IconContext.Provider value={{ size: '1.5em' }}><FaLinkedin className="testas"/></IconContext.Provider> LinkedIn
          </Texts>
          <Texts>
          <IconContext.Provider value={{ size: '1.5em' }}><FaGithub className="testas"/></IconContext.Provider> GitHub
          </Texts>
          <ImgTest src={punch} />
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
            interesting to me, such as ReactJS, Unity, and Android Studio. I've
            been exposed to a lot of coding languages as well, but never truly
            got to specialize in a select few. Currently, I'm aimming to
            specialize more in Python, JavaScript, and HTML5/CSS3. Recently,
            I've been searching for an entry-level software engineer position
            whilst improving my coding proficiency in the meantime.
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
            <Padx>
            <h3 className="lol"> Hobbies and Interests
            <IconContext.Provider value={{ size: '1.5em' }}><GiGamepad className="testax"/></IconContext.Provider>
            </h3>
            </Padx>
            <p> I love playing video games and badminton. I was an active member
            of the UCSD Badminton Team, and have played for my respective
            school's team since high school (8 years). Outside of team
            practice, I often played badminton recreationally as well (although
            not recently due to COVID-19)</p>
            <p> I'm also an avid gamer; I mostly enjoy playing League of Legends
            and Nintendo games. I adore cats as well. </p>
        </Col>}
      </Spring>
      </Row>
      <div className="reference">Favicon is made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div className="copyx"><Texts><IconContext.Provider value={{ size: '1.5em' }}><FaCopyright className="testas"/></IconContext.Provider>2020 Wesley Kok</Texts></div>
    </Container>
  </Styles>
)
