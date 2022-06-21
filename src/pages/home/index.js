import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../assets/css/pages/home.css";
import { CaHome } from "../../assets/img/paths";
import Footer from "../../components/general/footer";
import Section1 from "../../components/general/Section1";
import Section2 from "../../components/general/Section2";
import Section3 from "../../components/general/Section3";
import ReactTilt from "react-universal-tilt";

const HomePage = () => {
  return (
    <div>
      <Container className="gradient-front" fluid>
        <Row>
          <Col md={5} className="mt-5 image-section">
            <div className="img-fluid p-5 ml-5 go-hide-front data-tilt">
              <ReactTilt>
                <CaHome />
              </ReactTilt>
            </div>
          </Col>

          <Col md={5} className="m-auto " align="center">
            <Card
              style={{
                borderRadius: "5%",
                border: "2px solid orange",
                borderColor: "#ff7963",
              }}
            >
              <Card.Body className="card-items mt-2">
                <h1 style={{ color: "#ff7963", fontSize: "3.8rem" }}>
                  Make Fun <br /> Creating
                </h1>
                <h6 className="mt-5" style={{ fontSize: "1.5rem" }}>
                  Make awesome Formal card!
                </h6>
                <Link to="/dashboard" className="btn btn-info mt-5">
                  Get started
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Section1 />
      </Container>

      <Section2 />
      <div className="gradient-reverse">
        <Section3 />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
