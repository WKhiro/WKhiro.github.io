import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
