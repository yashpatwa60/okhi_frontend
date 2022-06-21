import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import { CaHome, CaLogin, CaSignUp } from "../../assets/img/paths";


const Section3 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="my-5 text-center text-white">
            <h2 style={{ fontSize: "2.5rem" }}>Follow Three Steps</h2>
          </Col>
        </Row>

        <Row className="sub-header align-items-center text-center text-white p-4">
          <Col align="center">
            <div style={{ height: "250px", width: "250px" }}>
              <CaSignUp />
            </div>

            <h6>1 . Sign up</h6>
          </Col>
          <Col align="center" className="mt-5">
            <div style={{ height: "250px", width: "250px" }}>
              <CaHome />
            </div>

            <h6>2. Create Your Card</h6>
          </Col>
          <Col align="center">
            <div style={{ height: "250px", width: "250px" }}>
              <CaLogin />
            </div>
            <h6>3. Share Your Card</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
