import React from "react";
import { Title } from "../../Globe.js";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CaFacebook, CaGithub, CaInstagram, CaLinkedin, CaQuora, CaSkype, CaTwitter, CaYoutube } from "../../../assets/img/paths/index.js";

function FollowMe(props) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="mt-3" {...props}>
      {props.text}
    </Tooltip>
  );
   
  return (
    <div className="my-5 ">
      <Title className="title">
        <Row>
          <h4 style={{ color: "#192a56", margin: "auto" }}>Follow Me</h4>
        </Row>
        <Row className="mt-4">
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "Facebook" })}
              >
                <a
                  id="button-tooltip"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.fb}
                >
                  <CaFacebook fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "Instagram" })}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.instagram}
                >
                  <CaInstagram fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "LinkedIn" })}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.linkedin}
                >
                  <CaLinkedin fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "Skype" })}
              >
                <a target="_blank" rel="noopener noreferrer" href={props.skype}>
                  <CaSkype fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "Twitter" })}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.twitter}
                >
                  <CaTwitter fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "YouTube" })}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.youtube}
                >
                  <CaYoutube fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
          <Col>
            <div>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip({ text: "GitHub" })}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.github}
                >
                  <CaGithub fill={props.color} />
                </a>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
      </Title>
    </div>
  );
}

export default FollowMe;
