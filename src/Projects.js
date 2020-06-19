import React from 'react';
import Container from 'react-bootstrap/Container';
import { Spring } from 'react-spring/renderprops';
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GradientBackground } from './components/GradientBackground';
import styled from 'styled-components';
import wyvern from './assets/wyvern.png';
import movie from './assets/movie.png';

const Styles = styled.div`

.icon
{
  display: inline;
  filter: drop-shadow(2px 2px 4px black);
}

.iconText
{
  display: inline;
  margin-left: 10px;
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

a
{
  color: aqua;
  text-decoration: none;
}

.project
{
  display: inline-flex;
}

/*
  mins: prevent web page repositioning during animation
  maxs: prevent elongated column height when reducing page size
*/
.project.image
{
    min-width: 202px;
    min-height: 321px;
    max-height: 321px;
    border: 3px solid white;
    box-shadow: 2px 2px 4px black;
    margin-bottom: 10px;
    margin-right: 50px;
}

.project.text
{
  color: white;
  text-shadow: 2px 2px 4px black;
  flex: 1;
  margin-right: 30px;
}

`;

export const Projects = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Container className="project">
      <Spring from={{opacity: 0}} to={{opacity: 1}}
      config={{delay: 100, duration: 1000}}>
      {props =>
      <div className="project image" style={props}>
        <a href="https://wkhiro.itch.io/wyvern">
          <img src={wyvern} alt="" />
        </a>
      </div>
      }
      </Spring>
      <Container>
        <h1 className="project text">Wyvern's Wrath</h1>
        <h5 className="project text">2018</h5>
        <p className="project text">
          A mobile game application written in JavaScript
          utilizing the Phaser framework. It was then ported over to Android
          Studio using Apache Cordova, allowing it to run in browser and on
          mobile devices!
          </p>
      </Container>
      </Container>

      <Container className="project">
      <Spring from={{opacity: 0}} to={{opacity: 1}}
      config={{delay: 500, duration: 1000}}>
      {props =>
      <div className="project image" style={props}>
        <a href="https://wkhiro.itch.io/wyvern">
          <img src={wyvern} alt="" />
        </a>
      </div>
      }
      </Spring>
      <Container>
        <h1 className="project text">Wyvern's Wrath</h1>
        <h5 className="project text">2018</h5>
        <p className="project text">
          A mobile game application written in JavaScript
          utilizing the Phaser framework. It was then ported over to Android
          Studio using Apache Cordova, allowing it to run in browser and on
          mobile devices!
        </p>
      </Container>
      </Container>

      <Container className="project">
      <Spring from={{opacity: 0}} to={{opacity: 1}}
      config={{delay: 900, duration: 1000}}>
      {props =>
      <div className="project image" style={props}>
        <a href="http://project-cinescope.s3-website-us-west-2.amazonaws.com/">
          <img src={movie} alt="" />
        </a>
      </div>
      }
      </Spring>
      <Container>
        <h1 className="project text">Cinescope</h1>
        <h5 className="project text">2018</h5>
        <p className="project text">
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
        <IconContext.Provider value={{ size: '1.5em' }}>
          <div className="icon"><FaCopyright /></div>
        </IconContext.Provider>
        <div className="iconText">2020 Wesley Kok</div>
      </div>
    </Container>
  </Styles>
)
