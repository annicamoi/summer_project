import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import taekwondoImage from "../assets/img/taekwondoImage.jpg";

const Styles = styled.div`
  .jumbo {
    // background: url(${taekwondoImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #1b1bcd;
    oapcity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid={true} className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Taekwon-Do</h1>
        <p>Espoon TKD seura Ry</p>
      </Container>
    </Jumbo>
  </Styles>
);
