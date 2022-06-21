import React from "react";
import { Title } from "../../Globe.js";
import MyVerticallyCenteredModal from "./Modal";
import { Row, Col } from "react-bootstrap";
import { CaCompany, CaCompanyEmail, CaLocation, CaSolution, CaWebsite } from "../../../assets/img/paths/index.js";

function CompanyDetails(props) {
  return (
    <div className="mt-5">
      <Title className="title">
        <Row>
          <h4 style={{ color: "#192a56", margin: "auto" }}>Company</h4>
        </Row>
        <Row className="mt-4">
          <Col>
            <ButtonRef
              icon={<CaCompany fill={props.color} />}
              text={"Company"}
              data={props.company}
              label="Company"
            />
          </Col>
          <Col>
            <ButtonRef
              icon={<CaLocation fill={props.color} />}
              text={"Address"}
              data={props.company_address}
              label="Address"
            />
          </Col>
          <Col>
            <div>
              <a href={"mailto:" + props.company_email}>
                <CaCompanyEmail fill={props.color} />
                <h6 className="littleText">Mail</h6>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.company_website}
              >
                <CaWebsite fill={props.color} />
                <h6 className="littleText">Website</h6>
              </a>
            </div>
          </Col>
          <Col>
            <ButtonRef
              icon={<CaSolution fill={props.color} />}
              text={"Company Bank"}
              data={props.company_bank}
              label="Company Bank"
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
        label={props.label}
        value={props.data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default CompanyDetails;
