import React from 'react';
import Container from 'react-bootstrap/Container';
import { Spring } from 'react-spring/renderprops';
import { GradientBackground } from './components/GradientBackground';
import { Reference } from './components/Reference';
import styled from 'styled-components';
import statue from './assets/statue.png';
import wyvern from './assets/wyvern.png';
import movie from './assets/movie.png';

const Styles = styled.div`

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
  flex: 1;
  margin-right: 30px;
}

.descriptionText
{
  color: white;
  padding-bottom: 50px;
}

a
{
  color: #70F0FF;
  text-decoration: none;
  &:hover
  {
    opacity: 0.8;
  }
}

`;

export const Projects = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Container className="descriptionText">
        <h5>
          Only large projects are on showcase here. Smaller scale projects can
          be found on my <a href="https://github.com/WKhiro">GitHub</a>.
        </h5>
      </Container>
      <Container className="project">
      <div className="project image">
        <a href="https://github.com/WKhiro/Statue_In_Space">
          <img src={statue} alt="" />
        </a>
      </div>

      <Container>
        <h1 className="project text">Statue in Space</h1>
        <h5 className="project text">2019</h5>
        <p className="project text">
          An OpenGL project showcasing the implementation of a variety of
          computer graphics features, such as shadow mapping and bloom.
        </p>
      </Container>
      </Container>

      <Container className="project">
      <div className="project image">
        <a href="https://wkhiro.itch.io/wyvern">
          <img src={wyvern} alt="" />
        </a>
      </div>

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
      <div className="project image" >
        <a href="http://project-cinescope.s3-website-us-west-2.amazonaws.com/">
          <img src={movie} alt="" />
        </a>
      </div>

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
      <Reference />
    </Container>
  </Styles>
)
