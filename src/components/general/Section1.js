import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../../assets/css/pages/home.css'
import Logo1 from "../../assets/img/mobile-solid.svg";
import Logo2 from "../../assets/img/share-alt-solid.svg";
import Logo3 from "../../assets/img/angellist-brands.svg";

const Section1 = () => {
  return (
    <div className="my-5">
      <Container className="mt-5 p-5 ">
        <Row className="">
          <Col className="text-center text-white">
            <h2>Digital business cards</h2>
          </Col>
        </Row>
        <Row className="text-white">
          <Col md={12} lg={4} align="center">
            <img src={Logo1} className="section-icons mt-5" />
            <h6 className="mt-5">
              Easily Create digital <br /> business cards
            </h6>
          </Col>
          <Col md={12} lg={4} align="center">
            <img src={Logo2} className="section-icons mt-5" />
            <h6 className="mt-5">
              Share your card <br /> with anyone
            </h6>
          </Col>
          <Col md={12} lg={4} align="center">
            <img src={Logo3} className="section-icons mt-5" />
            <h6 className="mt-5">
              Customize your card <br />
              seamlessly
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
