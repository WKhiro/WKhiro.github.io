import React from 'react';
import Container from 'react-bootstrap/Container';
import { Particles } from 'react-particles-js';
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from 'styled-components';

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

/* Blog text */
.postText
{
  color: white;
  text-shadow: 2px 2px 4px black;
  padding: 0px 50px 50px 50px;
  text-align: center;
}

.header
{
  color: white;
  text-shadow: 2px 2px 4px black;
  text-align: center;
  margin-bottom: 20px;
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
      <Container className="squeeze">
        <h1 className="header">First Post!</h1>
        <p className="postText">
          Honestly, I'm not sure what to really put here at the moment, but
          making this website has been quite a journey. Thankfully, it only
          took me about 3 days to create this website from scratch!
        </p>
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
