import React, { useState, useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// Form steps
import FirstStep from "./Form/FirstStep";
import SecondStep from "./Form/SecondStep";
import ThirdStep from "./Form/ThirdStep";
import FourthStep from "./Form/FourthStep";
import { Row, Col, Button } from "react-bootstrap";
import { useToasts } from 'react-toast-notifications';

// API Related
const axios = require("axios")
const {baseURL} = require('../../assets/js/config')
const $http = axios.create({
  baseURL
})

const labels = ["Contact", "Profile", "Company", "Social Handles"];

const StepForm = ({initialData, updateProp}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState(initialData);
    const { addToast } = useToasts()

    // Watching for initialData
    useEffect(() => {
      setFormValues(initialData)
    }, [initialData])

    // Updating the data
    const updateDetails = () => {
      let upd_data = {}
      for(let key in formValues){
        upd_data[key] = formValues[key]
      }
      $http.put(`user/me`, upd_data, {
        headers : {
          'x-auth-token' : localStorage.getItem('token')
        }
      }).then(res => {
        addToast("Profile updated successfully", { appearance: 'success' })
      }).catch(err => {
        addToast(err.response.data, { appearance: 'error' })
      })
    }

    const handleChange = (e) => {
      const { name, value } = e.target;

      let new_form_values = {
        ...formValues,
      }
      new_form_values[name] = value
      setFormValues(new_form_values);

      //lifting state up
      updateProp(()=>({
        ...new_form_values
      }))
    }

    const handleFile = (event) => {
      // setFormValues((prev) => ({
      //   ...prev,
      //   "file": event.target.files[0],
      // }));
      const file = event.target.files[0]
      const form_data = new FormData()
      form_data.append('file', file)
      // Uploading the file on server
      $http.post(`user/upload`, form_data, {
        headers : {
          'x-auth-token' : localStorage.getItem('token'),
          'Content-Type' : 'undefined'
        }
      }).then(res => {
        addToast("Avatar changed successfully", { appearance: 'success' })
        const res_data = res.data
        const profile_picture_url = res_data.url
        const profile_picture = res_data.filename
        let new_form_values = { ...formValues, profile_picture, profile_picture_url}
        
        setFormValues(new_form_values)
        updateProp((prev)=>({
          ...new_form_values
        }))
      }).catch(err => {
        addToast(err.response.data, { appearance: 'error' })
      })
    }

    const handleBack = () => {
      setActiveStep((prev)=> prev-1)
    }

    const handleNext = () => {
      setActiveStep((prev)=> prev+1)
    }

    const changeStepper = (new_step_index) => {
      setActiveStep(()=> new_step_index)
    }

    const handleSteps = (step) => {
      switch (step) {
        case 0:
          return (
            <FirstStep
              handleNext={handleNext}
              handleChange={handleChange}
              values={formValues}
              handleFile={handleFile}
              
            />
          );
        case 1:
          return (
            <SecondStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              values={formValues}
              
            />
          );
        case 2:
          return (
            <ThirdStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              values={formValues}
              
            />
          );
        case 3:
          return (
            <FourthStep
              handleNext={handleNext}
              handleBack={handleBack}
              handleChange={handleChange}
              values={formValues}
              
            />
          );
        default:
          break;
      }
    };

    return (
      <>
        <Row>
          <Col align="center" className="mt-4">
            <h2>OKHi Editor</h2>
            <h6 className="text-muted">
              Fill out details and required fields *{" "}
            </h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <Stepper
              activeStep={activeStep}
              style={{ margin: "30px 0 15px" }}
              alternativeLabel
            >
              {labels.map((label, label_i) => (
                <Step key={label} onClick={() => changeStepper(label_i)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Col>
        </Row>
        
        {handleSteps(activeStep)}

        <div className="text-center mt-3">
          <Button variant="dark" onClick={() => updateDetails()}>Update</Button>
        </div>
        {/*<pre>{JSON.stringify(formValues, null, 2)}</pre>*/}
      </>
    );
}

export default StepForm;