import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import header_landscape from "../assets/img/header_landscape.mp4";

const Styles = styled.div`
  .jumbo {
    // background: url(${header_landscape}) no-repeat fixed bottom;
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
      <video className="header_landscape" muted autoPlay loop style={{
        position: "absolute", width: "100%", height: "100%", zIndex: "-1", left: "0", top: "0", right: "0", bottom: "0", objectFit: "cover"
      }}><source src={header_landscape} type="video/mp4" /></video>
      <div className="overlay"></div>
      <Container>
        <h1>Taekwon-Do</h1>
        <p>Espoon TKD Seura Ry</p>
      </Container>
    </Jumbo>
  </Styles >
);
