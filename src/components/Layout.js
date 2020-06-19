import React from 'react';
import Container from 'react-bootstrap/Container';
// or import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .reference {
    text-align: center;
    color: white;
  }
`;

export const Layout = (props) => (
  <Styles>
  <Container>
    {props.children}
  </Container>
  </Styles>
)
