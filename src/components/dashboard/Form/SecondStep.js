import React from 'react'
import {  Row, Col, Button, Form } from "react-bootstrap";


const SecondStep = ({
  handleChange,
  handleNext,
  handleBack,
  values
}) => {
  return (
    <>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>About me</Form.Label>
              <Form.Control
                name="aboutme"
                onChange={handleChange}
                value={values.aboutme}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                name="skills"
                onChange={handleChange}
                value={values.skills}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                name="experience"
                onChange={handleChange}
                value={values.experience}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control
                name="education"
                onChange={handleChange}
                value={values.education}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            
          </Form>
        </Col>
      </Row>

      <div className="text-center">
        <Button onClick={handleBack} variant="primary" type="button">
          Back
        </Button>
        <Button className="ml-3" onClick={handleNext} variant="primary" type="button">
          Next
        </Button>
      </div>
    </>
  );
};

export default SecondStep;
