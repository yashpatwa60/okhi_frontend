import React from "react";
import {  Row, Col, Button, Form } from "react-bootstrap";


const ThirdStep = ({ handleChange, handleNext, handleBack, values }) => {
  return (
    <>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="company"
                onChange={handleChange}
                value={values.company}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                name="company_address"
                onChange={handleChange}
                value={values.company_address}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company E-mail</Form.Label>
              <Form.Control
                name="company_email"
                value={values.company_email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company Website</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="company_website"
                type="URL"
                value={values.company_website}
                placeholder="Enter Website"
              />
              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Bank</Form.Label>
              <Form.Control
                name="company_bank"
                onChange={handleChange}
                value={values.company_bank}
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
        <Button
          className="ml-3"
          onClick={handleNext}
          variant="primary"
          type="button"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default ThirdStep;
