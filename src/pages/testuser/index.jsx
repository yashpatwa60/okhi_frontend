import React, { useState } from 'react'
import { Button, Spinner } from "react-bootstrap"
import { useToasts } from "react-toast-notifications"
import { useHistory } from "react-router-dom"

// API Related
const axios = require("axios")
const { baseURL } = require("../../assets/js/config");
const $http = axios.create({
  baseURL,
});


const TestUser = () => {

    const { addToast } = useToasts()
    const history = useHistory()
    const [is_loading, setIsLoading] = useState(false)

    function generateRandomMobileNumber() {
        const prefix = '91'; // Common mobile prefix (can be adjusted)
        let randomNumber = '';
      
        for (let i = 0; i < 9; i++) { // Generate 9 random digits
          randomNumber += Math.floor(Math.random() * 10);
        }
      
        return prefix + randomNumber;
      }

    const signUpTestUser = async () => {
        const name = "test" + Math.random().toString(16).slice(2)
        const formData = {
            name,
            email: `${name}@gmail.com`,
            gender: "M",
            password: name,
            mobile: generateRandomMobileNumber()
        }

        setIsLoading(true)

        // SignUp
        $http.post(`user`, formData)
        .then((res) => {
            addToast("Account created successfully", { appearance: "success" })
        })
        .catch((err) => {
            setIsLoading(false)
            addToast(err.response.data, { appearance: "error" });
        })

        // add delay of 5 sec for backend account creation
        setTimeout(() => {
            // Login
            $http.post('auth', formData)
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
        }, 5000)

        

    }
  return (
    <div>
        { is_loading ? 
        <div>
            <Spinner animation="border" role="status"></Spinner>
        </div> 
        : 
        <Button variant="info" onClick={() => signUpTestUser()}>Login as a Test User</Button>
        }
    </div>
  )
}

export default TestUser