import React from "react";
import Container from "react-bootstrap/Container";
import { FaCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GradientBackground } from "./components/GradientBackground";
import styled from "styled-components";

const Styles = styled.div`
  /* Blog text */
  .postText {
    color: white;
    text-shadow: 2px 2px 4px black;
    padding: 0px 50px 50px 50px;
    text-align: center;
  }

  .header {
    color: white;
    text-shadow: 2px 2px 4px black;
    text-align: center;
    margin-bottom: 20px;
  }

  .icon {
    display: inline;
    filter: drop-shadow(2px 2px 4px black);
  }

  .iconText {
    display: inline;
    margin-left: 10px;
  }

  /* Copyright text */
  .bottomText {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px black;
  }

  .bottomText.copyRight {
    margin-bottom: 20px;
  }

  a {
    color: aqua;
    text-decoration: none;
  }
`;

export const NoMatch = () => (
  <Styles>
    <GradientBackground />
    <Container>
      <Container className="squeeze">
        <h1 className="header">404 Page Not Found</h1>
        <p className="postText">
          You should not be here; you are trying to access a page that does not
          exist.
        </p>
      </Container>

      <div className="bottomText">
        Favicon is made by{" "}
        <a href="http://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
      <div className="bottomText copyRight">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="icon">
            <FaCopyright />
          </div>
        </IconContext.Provider>
        <div className="iconText">2020 Wesley Kok</div>
      </div>
    </Container>
  </Styles>
);
