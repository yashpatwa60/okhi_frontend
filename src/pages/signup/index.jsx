import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Container, Col, Row, Form, Button, Card, Spinner } from "react-bootstrap";
import { CaCup, CaSignUp } from "../../assets/img/paths";

// API Related
const axios = require("axios");
const { baseURL } = require("../../assets/js/config");
const $http = axios.create({
  baseURL,
});

function SignUp() {
  // Local states
  const [formdata, setFormdata] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "M",
    password: "",
  })

  const [is_loading, setIsLoading] = useState(false)

  const history = useHistory();
  // Toast notifications
  const { addToast } = useToasts()

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
      .post(`user`, formdata)
      .then((res) => {
        setIsLoading(false)
        addToast("Account created successfully", { appearance: "success" });
        history.push("/login");
      })
      .catch((err) => {
        setIsLoading(false)
        addToast(err.response.data, { appearance: "error" });
      });
  };

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col className="col-md-6 m-auto go-hide">
            <CaSignUp />
          </Col>
          <Col className="col-md-6 m-auto">
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
                    <CaCup fill="#00b4d8" />
                    <h2>Sign Up</h2>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="name"
                          type="text"
                          placeholder="Name"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="mobile"
                          type="tel"
                          placeholder="Mobile"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                          name="gender"
                          type="text"
                          as="select"
                          onChange={handleChange}
                        >
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="O">Other</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group>
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
                  <Col></Col>
                  <Col>
                    <Link
                      to="/login"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Col>
                </Row></> }
              </Card.Body>
            </Card>
          </Col>
          {/*<pre>{JSON.stringify(formdata, null, 2)}</pre>*/}
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
