import React, {useEffect, useState} from 'react'
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";

// API Related
const axios = require("axios")
const {baseURL} = require('../../../assets/js/config')
const $http = axios.create({
  baseURL
})

const FirstStep = ({
    handleChange,
    handleNext,
    handleFile,
    values
}) => {

  const [themes, setThemes] = useState([])
  // On created
  useEffect(() => {
    $http.get('bgtheme').then(res => {
      setThemes(res.data)
    }).catch(err => {
      alert(err.response.data)
    })
  }, [])

  return (
    <>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.name}
                name="name"
                type="text"
                placeholder="Name"
              />
            </Form.Group>

            {/*<Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>*/}

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    name="gender"
                    type="text"
                    value={values.gender}
                    as="select"
                    onChange={handleChange}
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Mobile</Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control
                      onChange={handleChange}
                      value={values.mobile}
                      name="mobile"
                      type="tel"
                      placeholder="Mobile"
                    />
                  </InputGroup>
                  
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Whatsapp</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control
                  onChange={handleChange}
                  value={values.whatsapp}
                  name="whatsapp"
                  type="text"
                  placeholder="Whatsapp No."
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                onChange={handleChange}
                value={values.address}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>UPI Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.personal_upi}
                name="personal_upi"
                type="text"
                placeholder="UPI Virtual Address"
              />
            </Form.Group>

            <Row>
              <Col md={12} className="mt-3">
                <Form.Label>Select Theme</Form.Label>
              </Col>

              {themes.map((theme_url, theme_id) => {

                return <Col xs={4} sm={4} md={6} key={`THEME_SELECT_${theme_id}`}>
                  <input
                    type="radio"
                    onChange={handleChange}
                    value={theme_url}
                    name="theme"
                    id="id1"
                    className="mr-2"
                  />
                  <label className="mb-0" htmlFor="id1">
                    <div style={{width: '100px', 'height' : '100px', backgroundImage : `url(${theme_url})`}}>
                      
                    </div>
                  </label>
                </Col>

              })}
              
            </Row>
            
            <Row className="mt-4">
              <Col md={12} lg={12}>
                <Form.Label htmlFor="exampleColorInput">
                  Color picker
                </Form.Label>
              </Col>
              <Col xs={3} sm={3} md={3} lg={2}>
                <Form.Control
                  type="color"
                  name="color"
                  value={values.color}
                  onChange={handleChange}
                  id="exampleColorInput"
                  title="Choose your color"
                />
              </Col>

              <Col xs={6} sm={4} md={6}>
                <label className="btn btn-outline-danger">
                  <input
                    hidden
                    id="my-file-selector"
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                  />
                  Upload Avatar
                </label>
              </Col>
            </Row>

            
          </Form>
        </Col>
      </Row>

      <div className="text-center mt-3">
        <Button onClick={handleNext} variant="primary" type="button">
          Next
        </Button>
      </div>
    </>
  )
}

export default FirstStep;
