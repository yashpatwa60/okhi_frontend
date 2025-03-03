// const baseURL = `http://localhost:3498/api`
// const baseURL = `http://81.4.100.184:3498/api`
// const baseURL = `https://okhi.in/api`
// const baseURL = `https://okhi-node-server.herokuapp.com/api`;
const baseURL = `https://okhi-backend.onrender.com/api`
const cardInitialVals = {
  name: "",
  is_approved : false,
  profile_picture : "",
  profile_picture_url : "",
  email: "",
  mobile: "",
  whatsapp: "",
  gender : "M",
  theme: null,
  file: "",
  color: "#0fbcf9",
  address : "",
  personal_upi : "",

  aboutme: "",
  skills: "",
  experience: "",
  education: "",

  company: "",
  company_email: "",
  company_website: "",
  company_address: "",
  company_bank : "",

  twitter: "",
  linkedin: "",
  instagram: "",
  fb: "",
  skype: "",
  youtube: "",
  github: "", 
}

module.exports = {
	baseURL,
	cardInitialVals
}