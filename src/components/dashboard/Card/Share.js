import React, { useState, useRef } from "react";
import { Row, Col, Card, Overlay, Tooltip} from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CaClipboard, CaClipboardChecked, CaWhatsappSm } from "../../../assets/img/paths";


const Share = ({user, isFinal}) => {

    const [show, setShow] = useState(false);
    // const [whatsapp_msg]
    const target = useRef(null);

    const copied = `https://okhi.in/hi/${user.mobile}`;
    const WhatsappApi = `https://api.whatsapp.com/send?text=${copied}`;

    return (
        <div className="mb-3 mt-2">
          <Card className="no-border">
            <Card.Body className="p-2">
              <Row>
                <Col className="my-1 d-flex justify-content-center" >
                  <div style={{paddingTop: '8px'}} >
                    <span className="p-2">
                      <b>Share Card</b>
                    </span>
                    <span className="px-3 py-1 share-url-block">
                      <b>{`https://okhi.in/hi/${user.mobile}`}</b>
                    </span>
                  </div>
                  <span style={{ cursor: "pointer", paddingTop : '8px' }}>
                    <CopyToClipboard text={`https://okhi.in/hi/${user.mobile}`}>
                      <div
                        className="ml-1"
                        style={{ marginTop: "-3px", float: "right" }}
                        ref={target}
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        {show ? (
                          <CaClipboardChecked fill={"green"} />
                        ) : (
                          <CaClipboard />
                        )}
                      </div>
                    </CopyToClipboard>
                  </span>
                  <div className="ml-1" style={{ marginTop: "5px" }}>
                    <a href={WhatsappApi}>
                      <CaWhatsappSm />
                    </a>
                    <Overlay
                      target={target.current}
                      show={show}
                      placement="top"
                    >
                      {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                          Copied !!
                        </Tooltip>
                      )}
                    </Overlay>
                  </div>
                </Col>
                { (isFinal) ? (
                    <Col className="my-1" align="center">
                    <a href="https://okhi.in">
                  <div className="btn btn-outline-dark btn-center">
                 
                    Create your own card
                  </div>
                  </a>
                </Col>
                 ) : null }
                
              </Row>
            </Card.Body>
          </Card>
        </div>

    );
}

export default Share;
