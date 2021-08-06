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
            This is my personal website. I either linked you here myself, or you
            got here via my GitHub. Either way, you can learn more about me by
            reading the section to the right, or by looking at my blog or
            projects page. <br />
            <br /> Here are some handy links if you want to email me, view my
            LinkedIn, or check out my projects directly on Github!
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
          <h3>Who Am I?</h3>
          <p>
            I'm Wesley. I'm a software engineer that develops applications based
            on this motto: If I don't like the way my application looks or runs,
            why would anyone else? My code is always written as cleanly and
            simplistic as possible both for others, and for my forgetful future
            self.
          </p>
          <h3>Alma Mater</h3>
          <ul>
            <li>University of California - San Diego</li>
            <li>B.S. in Computer Science (Spring 2020)</li>
          </ul>
          <h6>Favorite Courses</h6>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Computer Security</li>
            <li>Computer Graphics</li>
          </ul>
          <h3 className="headerH3">
            Hobbies and Interests
            <IconContext.Provider value={{ size: "1.5em" }}>
              <GiGamepad className="gameIcon" />
            </IconContext.Provider>
          </h3>
          <p>
            I'm an avid gamer; I mostly enjoy playing JRPGs, Nintendo games, and
            Osu. I adore dogs and cats as well.
          </p>
          <p>
            I enjoy playing badminton as well. I was an active member of the
            UCSD Badminton Team, and have played for my respective school's team
            since high school (8 years). Outside of team practice, I often
            played badminton recreationally as well (although not recently due
            to COVID-19)
          </p>
        </Col>
      </Row>
      <Reference />
    </Container>
  </Styles>
);
