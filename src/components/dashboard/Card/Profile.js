import React from "react";
import { Title } from "../../Globe.js";
import MyVerticallyCenteredModal from "./Modal";
import { Row, Col } from "react-bootstrap";
import { CaAbout, CaEducation, CaExperience, CaMilestones, CaSkills } from "../../../assets/img/paths/index.js";

function ProfileDetails(props) {
  return (
    <div className="mt-5">
      <Title className="title">
        <Row>
          <h4 style={{ color: "#192a56", margin: "auto" }}>Profile</h4>
        </Row>
        <Row className="mt-4">
          <Col>
            <ButtonRef
              icon={<CaAbout fill={props.color} />}
              text={"About Me"}
              data={props.aboutme}
              label="About Me"
            />
          </Col>
          <Col>
            <ButtonRef
              icon={<CaSkills fill={props.color} />}
              text={"Skills"}
              data={props.skills}
              label="Skills"
            />
          </Col>
          <Col>
            <ButtonRef
              icon={<CaExperience fill={props.color} />}
              text={"Experience"}
              data={props.experience}
              label="Experience"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ButtonRef
              icon={<CaEducation fill={props.color} />}
              text={"Education"}
              data={props.education}
              label="Education"
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

export default ProfileDetails;
