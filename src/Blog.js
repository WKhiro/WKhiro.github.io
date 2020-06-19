import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-flexbox-grid';
import { Particles } from 'react-particles-js';
import { Spring } from 'react-spring/renderprops';
import { FaLinkedin, FaGithub, FaCopyright } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { IconContext } from "react-icons";
import styled, { keyframes } from 'styled-components';
import punchy from './assets/wyvern.png';
import movie from './assets/movie.png';

const StyledText = styled.p`
  .icon {
    filter: drop-shadow(2px 2px 4px black);
    margin-right: 10px;
    display: inline;
  }
`;

const Styles = styled.div`

/* Background configuration */
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

/* Text columns */
.welcomeText
{
  color: white;
  text-shadow: 2px 2px 4px black;
  border-style: solid;
  padding: 50px;
}

.welcomeText.right
{
  padding: 50px;
  margin-left: 20px;
}

/* Copyright text */
.bottomText
{
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px black;
}

.bottomText.copyRight
{
  margin-bottom: 20px;
}

.header
{
    text-align: center;
    margin-bottom: 20px;
}

.headerH3
{
  display: inline;
}

.gameIcon
{
  filter: drop-shadow(2px 2px 4px black);
  margin-left: 10px;
}

a
{
  color: aqua;
  text-decoration: none;
}

.parent
{
  display: inline-flex;
}

/*mins: prevent jerking during animation, max for column height when squishing*/
.parent.narrow
{
    min-width: 202px;
    min-height: 321px;
    max-height: 321px;
    border: 3px solid white;
    box-shadow: 2px 2px 4px black;
    margin-bottom: 10px;
    margin-right: 50px;
}

.parent.real
{
  color: white;
  text-shadow: 2px 2px 4px black;
    margin-right: 30px;
    flex: 1;
}

.parent.real.smooth
{
  color: white;
  text-shadow: 2px 2px 4px black;
    flex: 1;
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
    <Container>
    <Container className="parent">
    <Spring from={{opacity: 0}} to={{opacity: 1}}
    config={{delay: 100, duration: 1000}}>
    {props =>
      <div className="parent narrow" style={props}>
          <a href="https://wkhiro.itch.io/wyvern">
            <img src={punchy} />
          </a>
      </div>
    }
    </Spring>
      <Container>
      <h1 className="parent real">Wyvern's Wrath</h1>
      <h3 className="parent real smooth">2018</h3>
      <p className="parent real">
        A mobile game application written in JavaScript
        utilizing the Phaser framework. It was then ported over to Android Studio
        using Apache Cordova, allowing it to run in browser and on mobile devices!
      </p>
      </Container>
    </Container>

    <Container className="parent">
    <Spring from={{opacity: 0}} to={{opacity: 1}}
    config={{delay: 500, duration: 1000}}>
    {props =>
      <div className="parent narrow" style={props}>
          <a href="http://project-cinescope.s3-website-us-west-2.amazonaws.com/">
            <img src={movie} />
          </a>
      </div>
    }
    </Spring>
      <Container>
      <h1 className="parent real">CineScope</h1>
      <h5 className="parent real">2018</h5>
      <p className="parent real">
        A web application also written in ReactJS. Aggregates movie ratings
        and reviews across multiple popular movie database sites for ease of
        viewing and comparison. Features user account creation with the usage
        of Firebase authentication.
      </p>
      </Container>
    </Container>
    <div className="bottomText">Favicon is made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from<a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
    <div className="bottomText copyRight">
      <StyledText>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <FaCopyright className="icon"/>
        </IconContext.Provider>
        2020 Wesley Kok
      </StyledText>
    </div>
    </Container>
  </Styles>
)
