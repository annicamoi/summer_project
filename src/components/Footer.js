import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Container fluid="true" className="footer">
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Yhteystiedot</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#">Puhelinnumero: 050-5232683</a>
                    </li>
                    <li>
                      <a href="#">Espoon TKD-seura ry PL 9 02101 Espoo</a>
                    </li>
                    <li>
                      <a href="#">Sähköposti: info@espoo.fi </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Sidosryhmät</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="https://espoontkd.myclub.fi/login"
                        target="blank"
                      >
                        MyClub{" "}
                      </a>
                    </li>
                    <li>
                      <a href="http://www.taekwon-do.fi/" target="_blank">
                        SITF Jäsenseura
                      </a>
                    </li>
                    <li>
                      <a href="https://itftkd.sport/" target="_blank">
                        ITF
                      </a>
                    </li>
                    <li>
                      <a href="http://www.teamespoo.com/" target="_blank">
                        Espoon TKD
                      </a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Tutustu meihin</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCqE1rP6Rma_s80_DI4OquMg"
                        target="_blank"
                      >
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#">Uutiset ja tiedotteet</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h4>Seuraa meitä</h4>
                <ul class="social-network social-circle">
                  <li>
                    <a
                      href="https://www.facebook.com/EspoonTKD"
                      target="_blank"
                      class="icoFacebook"
                      title="Facebook"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/espoontkdseura/"
                      target="_blank"
                      class="icoInstagram"
                      title="Instagram"
                    >
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 copy">
                <p class="text-center">
                  &copy; Copyright 2021 - Company Dirija. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
