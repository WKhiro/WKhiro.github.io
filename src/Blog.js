import React from 'react';
import Container from 'react-bootstrap/Container';
import { GradientBackground } from './components/GradientBackground';
import { Reference } from './components/Reference';
import styled from 'styled-components';

const Styles = styled.div`

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

`;

export const Blog = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Container className="squeeze">
        <h1 className="header">First Post!</h1>
        <p className="postText">
          Honestly, I'm not sure what to really put here at the moment, but
          making this website has been quite a journey. Thankfully, it only
          took me about 3 days to create this website from scratch!
        </p>
      </Container>
      <Reference />
    </Container>
  </Styles>
)
