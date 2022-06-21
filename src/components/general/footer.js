import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={12} lg={4} className="mt-5">
            <h2>Legal</h2>
            <div>
              <a href="!#">
                <h6 className="text-muted mt-2">Terms of use</h6>
              </a>
              <a href="!#">
                <h6 className="text-muted mt-2">Privacy Policy</h6>
              </a>
            </div>
          </Col>
          <Col md={12} lg={4} className="mt-5">
            <h2>Contact us</h2>
            <div>
              <a href="tel:7879572232">
                <h6 className="text-muted mt-2">(+91) 7879572232</h6>
              </a>
            </div>
          </Col>
          <Col md={12} lg={4} className="mt-5">
            <h2>
              For General Queries
            </h2>
            <div>
              <a href="mailto : yashpatwa1602@gmail.com">
                <h6 className="text-muted mt-2">yashpatwa1602@gmail.com</h6>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      
      <Container className="mt-5">
        <Row>
          <Col align="center">
            <h6 className="text-muted">
              Copyrights © OkHi . All rights are reserved.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
