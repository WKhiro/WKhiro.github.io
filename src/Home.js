import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-flexbox-grid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdMailOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import { GradientBackground } from "./components/GradientBackground";
import { Reference } from "./components/Reference";
import styled from "styled-components";
import punchy from "./assets/punchy.png";
import HomeLinks from "./components/HomeLinks";

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const Styles = styled.div`
  /* Text columns */
  .welcomeText {
    color: white;
    padding: 50px;
  }

  .welcomeText.right {
    margin-left: 20px;
  }

  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  .headerH3 {
    display: inline;
  }

  .gameIcon {
    filter: drop-shadow(2px 2px 4px black);
    margin-left: 10px;
  }

  .gamesColumns {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }

  a {
    text-decoration: none;
  }
`;

export const Home = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Row top="xs">
        <Col xs className="welcomeText">
          <h1 className="header">Welcome!</h1>
          <p>
            Hi, I'm Wesley. I'm an aspiring full-stack engineer, and I love to
            play video games in my free time.
            <br />
            <br /> Here are some handy links if you want to email me, view my
            LinkedIn, or check out my projects directly on Github.
          </p>
          <HomeLinks
            link="mailto:wesleykkok@gmail.com"
            icon={<MdMailOutline />}
            text="Email"
          ></HomeLinks>
          <HomeLinks
            link="https://www.linkedin.com/in/wesley-kok/"
            icon={<FaLinkedin />}
            text="LinkedIn"
          ></HomeLinks>
          <HomeLinks
            link="https://github.com/WKhiro"
            icon={<FaGithub />}
            text="GitHub"
          ></HomeLinks>
          <StyledImg src={punchy} />
        </Col>

        <Col xs className="welcomeText right">
          <h1 className="header"> About Me </h1>
          <h3>Technical Stuff</h3>
          <p>
            I am full-stack capable, but I prefer frontend development more than
            backend development.
            <br />
            Besides playing games in my free time, I like to make web
            applications and learn about game development with Unity and Unreal
            Engine as well. My proficiency with game engines is low though; it's
            currently just a hobby and I haven't had to utilize either tool in a
            professional setting yet.
          </p>
          <h3>Alma Mater</h3>
          <ul>
            <li>University of California - San Diego</li>
            <li>B.S. in Computer Science (Spring 2020)</li>
          </ul>
          <h3 className="headerH3">
            Hobbies and Interests
            <IconContext.Provider value={{ size: "1.5em" }}>
              <GiGamepad className="gameIcon" />
            </IconContext.Provider>
          </h3>
          <p>
            I'm an avid gamer, and play a variety of games in my free time. Here
            are some examples:
          </p>
          <ul className="gamesColumns">
            <li>League of Legends</li>
            <li>Valorant</li>
            <li>Overwatch</li>
            <li>Apex Legends</li>
            <li>Osu</li>
            <li>Nintendo Games</li>
            <li>JRPGs</li>
          </ul>
          <p>
            I enjoy playing badminton as well. I was an active member of the
            UCSD Badminton Team, and have played for my respective school's team
            since high school (8 years). Outside of team practice, I often
            played badminton recreationally as well.
          </p>
        </Col>
      </Row>
      <Reference />
    </Container>
  </Styles>
);
