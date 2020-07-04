import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-flexbox-grid';
import { Spring } from 'react-spring/renderprops';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdMailOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import { GradientBackground } from './components/GradientBackground';
import { Reference } from './components/Reference';
import styled from 'styled-components';
import punchy from './assets/punchy.png';

const StyledImg = styled.img`

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const Styles = styled.div`

/* Text columns */
.welcomeText
{
  color: white;
  padding: 50px;
}

.welcomeText.right
{
  margin-left: 20px;
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

.linkSpacing
{
  margin-bottom: 5px;
}

.linkDiv
{
  margin-right: 10px;
  display: inline;
  color: #70F0FF;
  &:hover
  {
    opacity: 0.8;
  }
}

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

.gameIcon
{
  filter: drop-shadow(2px 2px 4px black);
  margin-left: 10px;
}

a
{
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
            This is my personal website. I either linked you here myself,
            or you got here via my GitHub. Either way, you can learn more about
            me by reading the section to the right, or by looking at my blog or
            projects page. <br/><br/> Here are some handy links if you want to
            email me, view my LinkedIn, or check out my projects directly on
            Github!
          </p>
          <div className="linkSpacing">
            <a href="mailto:wesleykok@hotmail.com">
              <div className="linkDiv">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div className="icon"><MdMailOutline /></div>
                </IconContext.Provider>
                <p className="iconText">Email</p>
              </div>
            </a>
          </div>
          <div className="linkSpacing">
            <a href="https://www.linkedin.com/in/wesley-kok/">
              <div className="linkDiv">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div className="icon"><FaLinkedin /></div>
                </IconContext.Provider>
                <p className="iconText">LinkedIn</p>
              </div>
            </a>
          </div>
          <div className="linkSpacing">
            <a href="https://github.com/WKhiro">
              <div className="linkDiv">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div className="icon"><FaGithub /></div>
                </IconContext.Provider>
                <p className="iconText">GitHub</p>
              </div>
            </a>
          </div>
          <StyledImg src={punchy} />
        </Col>

        <Col xs className="welcomeText right">
          <h1 className="header"> About Me </h1>
            <h3>Who Am I?</h3>
            <p>
              I'm Wesley. I'm a fresh graduate, and an aspiring software
              engineer. Besides pursuing formal education in Computer Science
              through university courses, I began my journey into
              software development by tinkering around with technologies I found
              interesting to me, such as ReactJS, Unity, Unreal Engine 4, and
              Android Studio. I've been exposed to a lot of coding languages as
              well, but never truly got to specialize in a select few.
              Currently, I'm aiming to specialize more in Python, JavaScript,
              and HTML5/CSS3. Recently, I've been searching for an entry-level
              software engineer position whilst improving my coding proficiency
              in the meantime.
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
              <IconContext.Provider value={{ size: '1.5em' }}>
                <GiGamepad className="gameIcon"/>
              </IconContext.Provider>
            </h3>
            <p>
              I love playing video games and badminton. I was an active member
              of the UCSD Badminton Team, and have played for my respective
              school's team since high school (8 years). Outside of team
              practice, I often played badminton recreationally as well
              (although not recently due to COVID-19)
            </p>
            <p>
              I'm also an avid gamer; I mostly enjoy playing League of Legends
              and Nintendo games. I adore cats as well.
            </p>
        </Col>
      </Row>
      <Reference />
    </Container>
  </Styles>
)
