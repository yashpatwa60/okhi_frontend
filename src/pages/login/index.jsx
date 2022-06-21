import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Col, Row, Form, Button, Card, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import "../../assets/css/pages/login.css";
import { CaLock, CaLogin } from "../../assets/img/paths";

// API Related
const axios = require("axios");
const { baseURL } = require("../../assets/js/config");
const $http = axios.create({
  baseURL,
});

const initialstate = {
  email: "",
  password: "",
};

function SignIn() {
  // Local States
  const [formdata, setFormdata] = useState(initialstate);
  const [is_loading, setIsLoading] = useState(false)
  const history = useHistory();
  const { addToast } = useToasts();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    //make a async call
    setIsLoading(true)
    $http
      .post(`auth`, formdata)
      .then((res) => {
        setIsLoading(false)
        addToast("Successfully Logged In", { appearance: "success" });
        const res_user = res.data;
        localStorage.setItem("token", res_user.token);
        localStorage.setItem("name", res_user.name);
        localStorage.setItem("type", res_user.type);
        history.push("/dashboard");
      })
      .catch((err) => {
        setIsLoading(false)
        addToast(err.response.data, { appearance: "error" });
      });
  };

  return (
    <div>
      <Container className="mt-5 h-100">
        <Row>
          <Col className="col-md-6 m-auto go-hide">
            <CaLogin className="img-fluid" />
          </Col>
          <Col className="col-md-6 m-auto ">
            <Card>
              <Card.Body>
                {/*Loading Spinner*/}
                { is_loading ? 
                  <div className="text-center">
                    <Spinner animation="border" role="status">
                    </Spinner>
                  </div>
                 : 
                <>
                <Row>
                  <Col align="center">
                    <CaLock fill="#00b4d8" />
                    <h2>Sign In</h2>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="password"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>

                      <Button
                        onClick={handleSubmit}
                        variant="outline-dark"
                        type="button"
                      >
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>

                <hr />
                <Row>
                  <Col>
                    <Link
                      to="/"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      Forgot password?
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to="/SignUp"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Col>
                </Row>
                </> }
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
