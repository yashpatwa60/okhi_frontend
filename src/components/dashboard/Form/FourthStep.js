import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const FourthStep = ({ handleChange, handleNext, handleBack, values }) => {
  return (
    <>
      <Row>
        <Col>
          <Form>
            <Form.Group >
              <Form.Label>Facebook URL *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.fb}
                name="fb"
                type="URL"
                placeholder="Facebook URL"
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Instagram URL *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.instagram}
                name="instagram"
                type="URL"
                placeholder="Instagram URL"
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Linkedin URL *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.linkedin}
                name="linkedin"
                type="URL"
                placeholder="Linkedin URL"
              />              
            </Form.Group>

            <Form.Group >
              <Form.Label>Twitter URL *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.twitter}
                name="twitter"
                type="URL"
                placeholder="Twitter URL"
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Youtube Channel *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.youtube}
                name="youtube"
                type="URL"
                placeholder="Youtube URL"
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Github URL *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.twitter}
                value={values.github}
                name="github"
                type="URL"
                placeholder="Github URL"
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Skype ID *</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.skype}
                name="skype"
                type="URL"
                placeholder="Skype ID"
              />
            </Form.Group>

            
              {/*<Button onClick={handleNext} variant="primary" type="button">
                Next
              </Button>*/}
            

          </Form>
        </Col>
      </Row>

      <div className="text-center">
        <Button onClick={handleBack} variant="primary" type="button">
          Back
        </Button>
      </div>
    </>
  );
};

export default FourthStep;
