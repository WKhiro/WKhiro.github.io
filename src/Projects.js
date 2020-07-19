import React from "react";
import Container from "react-bootstrap/Container";
import { GradientBackground } from "./components/GradientBackground";
import { Reference } from "./components/Reference";
import styled from "styled-components";
import statue from "./assets/statue.png";
import wyvern from "./assets/wyvern.png";
import movie from "./assets/movie.jpg";
import hades from "./assets/hades.jpg";
import ProjectItem from "./components/ProjectItem";
import Sandbox from "./components/Sandbox";

const Styles = styled.div`
  .descriptionText {
    color: white;
    padding-bottom: 50px;
  }

  a {
    color: #70f0ff;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }

  .shift {
    padding-bottom: 40px;
  }
`;

export const Projects = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Container className="descriptionText">
        <h5 className="shift">
          Only larger projects are on showcase here. I have multiple smaller
          scale projects on my
          <a href="https://github.com/WKhiro"> GitHub</a>.
        </h5>
        <h4>Other Applications (Sandbox)</h4>
        <Sandbox
          link="https://github.com/WKhiro/Gatsby/"
          title="Gatsby"
          text="Another work in progress Gatsby web app. (Gatsby is a React-based, GraphQL
            powered, static site generator)"
        ></Sandbox>
        <Sandbox
          link="https://wkhiro.github.io/Cat_Crossing_API/"
          title="Animal Crossing"
          text="Animal Crossing web app for learning how to connect to an API. Only
        features the cat villagers. (No React, pure HTML/CSS/Javascript)"
        ></Sandbox>
        <Sandbox
          link="https://github.com/WKhiro/Riot_API_Winrates"
          title="Riot Games Win Rates"
          text="Python script that pulls in data from the Riot Games API to generate win rates."
        ></Sandbox>
      </Container>
      <ProjectItem
        imgLink="https://zagsboons.netlify.app/"
        imgSrc={hades}
        title="Zag's Boons"
        year="2020 - Present"
        description="A React.js web application made with the Gatsby framework. Allows users to
        quickly and easily view all branching upgrades and prerequisites within the game Hades. 
        Utilizes GraphQL and a self-made JSON file."
      ></ProjectItem>
      <ProjectItem
        imgLink="https://github.com/WKhiro/Statue_In_Space"
        imgSrc={statue}
        title="Statue in Space"
        year="2019"
        description="An OpenGL project showcasing the implementation of a variety of
      computer graphics features, such as shadow mapping and bloom."
      ></ProjectItem>
      <ProjectItem
        imgLink="https://wkhiro.itch.io/wyvern"
        imgSrc={wyvern}
        title="Wyvern's Wrath"
        year="2018"
        description="A mobile game application written in JavaScript utilizing the Phaser
        framework. It was then ported over to Android Studio using Apache
        Cordova, allowing it to run in browser and on mobile devices!"
      ></ProjectItem>
      <ProjectItem
        imgLink="http://project-cinescope.s3-website-us-west-2.amazonaws.com/"
        imgSrc={movie}
        title="Cinescope"
        year="2018"
        description="A web application also written in ReactJS. Aggregates movie ratings
        and reviews across multiple popular movie database sites for ease of
        viewing and comparison. Features user account creation with the
        usage of Firebase authentication."
      ></ProjectItem>
      <Reference />
    </Container>
  </Styles>
);
