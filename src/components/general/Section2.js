import React from 'react'
import { Container,Row , Col } from 'react-bootstrap'
import Money from '../../assets/img/section/money.svg'
import Time from '../../assets/img/section/time.svg'
import Smart from '../../assets/img/section/smart.svg'
import Ecofriendly from '../../assets/img/section/ecofriendly.svg'
import Easytouse from '../../assets/img/section/easytouse.svg'

const Section2 = () => {
    return (
      <div className="my-5">
        <Container className="my-5">
          <Row className="my-5">
            <Col align="center">
              <h2 style={{fontSize: "2.5rem"}}>Benefits of a ok hi Digital Visiting Card</h2>
            </Col>
          </Row>
          <Row className="align-items-center text-center">
            <Col>
              <img
                className="img-fluid"
                src={Ecofriendly}
                style={{ height: "200px", width: "200px" }}
              />
            </Col>
            <Col>
              <p className="text-muted mt-5">
                 A Recent Survey shows that 90% of printed visiting cards handed
                out are thrown out in less than a week. These can be stopped by
                increasing the use of Digital Visiting cards. Save Trees, Save
                Environment, Become Environment- friendly.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center text-center">
            <Col>
              <p className="text-muted mt-5">
                You can get easy access to the visiting cards shared by others
                on your Smartphone anytime, anywhere. Due to the Digital India
                Campaign, everyone is digitizing themselves and so everyone can
                easily access the Digital visiting cards.
              </p>
            </Col>
            <Col>
              <img
                src={Easytouse}
                style={{ height: "200px", width: "200px" }}
              />
            </Col>
          </Row>
          <Row className="align-items-center text-center">
            <Col>
              <img src={Money} style={{ height: "200px", width: "200px" }} />
            </Col>
            <Col>
              <p className="text-muted mt-5">
                Digital cards are not required to be printed and designed, like
                paper business cards. So, Digital Visiting cards are absolutely
                free so can save your money.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center text-center">
            <Col>
              <p className="text-muted mt-5">
                Digital Business card saves lot of time can share from mobile
                from laptop from computer anytime anywhere just share your link
                your complete information share just in one click
              </p>
            </Col>
            <Col>
              <img src={Time} style={{ height: "200px", width: "200px" }} />
            </Col>
          </Row>
          <Row className="align-items-center text-center">
            <Col >
              <img src={Smart} style={{ height: "200px", width: "200px" }} />
            </Col>
            <Col>
              <p className="text-muted mt-5">
                Ease of entry and updating of contact and all information no
                waiting time print card will come{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Section2
