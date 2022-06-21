import React from "react";
import { Title } from "../../Globe.js";
import { Row, Col } from "react-bootstrap";
import MyVerticallyCenteredModal from "./Modal";
import {
  CaEmail,
  CaMap,
  CaPayme,
  CaPhone,
  CaWhatsapp,
} from "../../../assets/img/paths/index.js";

function ContactDetails(props) {
  const WhatsappApi = `https://api.whatsapp.com/send?phone=91${props.whatsapp}&text=Got%20reference%20from%20okhi.in.%20Want%20to%20know%20more%20about%20your%20products%20and%20services.`;

  return (
    <div className="mt-5 ">
      <Title className="title">
        <Row>
          <h4 style={{ color: "#192a56", margin: "auto" }}>Contact</h4>
        </Row>

        <Row className="mt-4 ">
          <Col >
            <div>
              <a href={"tel:" + props.mobile}>
                <CaPhone fill={props.color} />
                <h6 className="littleText">Phone</h6>
              </a>
            </div>
          </Col>
          <Col>
            <div>
              <a href={"mailto:" + props.email}>
                <CaEmail fill={props.color} />
                <h6 className="littleText">Email</h6>
              </a>
            </div>
          </Col>
          <Col >
            <div>
              <a href={WhatsappApi}>
                <CaWhatsapp fill={props.color} />
                <h6 className="littleText">Whatsapp</h6>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
        
          <Col>
            <ButtonRef
              icon={<CaPayme fill={props.color} />}
              text={"UPI"}
              data={props.personal_upi}
              label="UPI"
            />
          </Col>
          <Col>
            <ButtonRef
              icon={<CaMap fill={props.color} />}
              text={"Address"}
              data={props.address}
              label="Address"
            />
          </Col>
        </Row>
      </Title>
    </div>
  );
}

function ButtonRef(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div align="center">
      <div onClick={() => setModalShow(true)} style={{ color: "black" }}>
        {props.icon}
        <h6 className="littleText">{props.text}</h6>
      </div>
      <MyVerticallyCenteredModal
        value={props.data}
        label={props.label}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ContactDetails;
