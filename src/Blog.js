import React from 'react';
import Container from 'react-bootstrap/Container';
import { Spring } from 'react-spring/renderprops';
import { GradientBackground } from './components/GradientBackground';
import { Reference } from './components/Reference';
import styled from 'styled-components';

const Styles = styled.div`

.squeeze
{
  padding: 20px;
  border: solid;
  border-color: white;
  margin-bottom: 10px;
  max-width: 1000px;
}

/* Blog text */
.postText
{
  color: white;
  text-shadow: 2px 2px 4px black;
  padding: 0px 50px 0px 50px;
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
        <h1 className="header">Work in Progress Guide!</h1>
        <p className="postText">
          Starting to create a League of Legends guide now, and it's going fairly
          well! I need to start manipulating states for this page however, so it's
          going to be harder to code than my initial website pages. The things
          that I do to make things look nice. I need to add in a table of contents
          box to allow users to jump between sections, and maybe a jump-to-the-top
          button somewhere since the guide is getting fairly long. I'm focusing
          on getting everything written down first, and then I'll work on UX,
          followed by polishing the UI.
        </p>
        <p className="postText">
          7/3/2020
        </p>
      </Container>

      <Container className="squeeze">
        <h1 className="header">Fighting with GitHub Pages</h1>
        <p className="postText">
          I thought that deploying my personal website through GitHub Pages
          would be an easy task, but it turns out that GitHub Pages doesn't play
          nice with React apps. I designed my website to be a single-page
          application (SPA) in the hopes of having a very fast website without
          the need to reload pages during use, but GitHub doesn't natively
          support single-page applications. As a result, I needed to import
          a special 404.html file into my build folder, and a redirection
          script into my index.html in order to handle 404 errors and redirect
          to the correct pages. Until I figured out that this was an common
          issue, I had thought I written a broken website.
        </p>
        <p className="postText">
          6/19/2020
        </p>
      </Container>

      <Container className="squeeze">
        <h1 className="header">First Post!</h1>
        <p className="postText">
          Honestly, I'm not sure what to really put here at the moment, but
          making this website has been quite a journey. Thankfully, it only
          took me about 3 days to create this website from scratch!
        </p>
        <p className="postText">
          6/18/2020
        </p>
      </Container>
      <Reference />
    </Container>
  </Styles>
)
