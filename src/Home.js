import React from 'react';
import { Cat } from './components/Cat';
import city from './assets/acnh2.jpg';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
  .divx {

position:fixed;
    background: url(${city}) no-repeat fixed bottom;
    opacity:0.8;
    background-color:#ccc;
    background-size: cover;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    z-index:-3;
  }
  .divy {
        position: relative;
  }
  .textx {
      background-color: #FFF;
      border-style: solid;
      padding: 50px;
  }
  .texty {
          background-color: #FFF;
      border-style: solid;
      padding: 50px;
      margin-left: 20px;
  }
`;

export const Home = () => (
  // return () here is removed due to ^

  <Styles>
    <div className="divx" />
    <Container className="divy">
    <Row>
    <Col className="textx">
    Col1
 </Col>
 <Col className="texty"> Col2 </Col>
 </Row>
  </Container>
  <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </Styles>
)
