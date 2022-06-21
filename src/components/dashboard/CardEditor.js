import React, { useState, useEffect, useRef } from "react";
import MakeAccount from "../Account";
import { Row, Col, Card, Overlay, Tooltip } from "react-bootstrap";
import StepForm from "./StepForm";
import {
  CaClipboard,
  CaWhatsappSm,
  CaClipboardChecked,
} from "../../assets/img/paths";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Share from "./Card/Share";

const { baseURL, cardInitialVals } = require("../../assets/js/config");
// API Related
const axios = require("axios");
const $http = axios.create({
  baseURL,
});

const CardEditor = () => {
  const [user, setUser] = useState(cardInitialVals);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  // const [whatsapp_msg]
  const target = useRef(null);

  const copied = `https://okhi.in/hi/${user.mobile}`;
  const WhatsappApi = `https://api.whatsapp.com/send?text=${copied}`;

  //lifting state up
  const updateProp = (data) => {
    setUser(data);
  };

  const type = localStorage.getItem("type");

  useEffect(() => {
    //Is admin
    $http
      .get(`user`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          let res_users = res.data;
          setUsers(res_users);
        }
      })
      .catch((err) => {});
  }, []);

  // On created
  useEffect(() => {
    // Loading details
    $http
      .get(`user/me`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data) {
          let res_user = res.data;

          let new_state = {
            ...user,
          };
          for (let key in user) {
            if (res_user[key] !== undefined && res_user[key] !== null) {
              new_state[key] = res_user[key];
            }
          }
          setUser(new_state);
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div
        className="card-outer"
        style={{ width: "100%", backgroundImage: `url(${user.theme})` }}
      >
        <div className="container">
          <Row>
            {/*Share card*/}

            {user.is_approved ? (
              <Col md={12} lg={12}>
                <Share user={user} isFinal={false} />
              </Col>
            ) : null}

            <div className="w-100 my-2"></div>
            {/*Live Display of Card*/}
            <Col md={12} lg={6}>
              <MakeAccount user={user} />
            </Col>
            {/*Live Editor*/}
            <Col md={12} lg={6}>
              <Card>
                <Card.Body>
                  <StepForm initialData={user} updateProp={updateProp} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
