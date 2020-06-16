import React from 'react';
import Container from 'react-bootstrap/Container';
// or import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <Container>
    {props.children}
  </Container>
)
