import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .project {
    display: inline-flex;
  }

  /*
  mins: prevent web page repositioning during animation
  maxs: prevent elongated column height when reducing page size
*/

  .project.image {
    min-width: 202px;
    max-width: 202px;
    min-height: 321px;
    max-height: 321px;
    border: 3px solid white;
    box-shadow: 2px 2px 4px black;
    margin-bottom: 10px;
    margin-right: 50px;
  }

  .project.text {
    color: white;
    flex: 1;
    margin-right: 30px;
  }
`;

export default function ProjectItem(props) {
  return (
    <Styles>
      <Container className="project">
        <a href={props.imgLink}>
          <img className="project image" src={props.imgSrc} alt="" />
        </a>
        <Container>
          <h1 className="project text">{props.title}</h1>
          <h5 className="project text">{props.year}</h5>
          <p className="project text">{props.description}</p>
        </Container>
      </Container>
    </Styles>
  );
}
