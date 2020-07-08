import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Styles = styled.div`
  .squeeze {
    padding: 20px;
    border: solid;
    border-color: white;
    margin-bottom: 10px;
    max-width: 1000px;
  }

  /* Blog text */
  .postText {
    color: white;
    padding: 0px 50px 0px 50px;
  }

  .header {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export default function BlogPost(props) {
  return (
    <Styles>
      <Container className="squeeze">
        <h1 className="header">{props.title}</h1>
        <p className="postText">{props.text}</p>
        <p className="postText">{props.date}</p>
      </Container>
    </Styles>
  );
}
