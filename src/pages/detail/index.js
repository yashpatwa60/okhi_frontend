import MakeAccount from "../../components/Account";
import { Container } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Share from "../../components/dashboard/Card/Share.js";


const {baseURL, cardInitialVals} = require('../../assets/js/config')
// API Related
const axios = require("axios")
const $http = axios.create({
  baseURL
})

export default function Detail() {
  const {id} = useParams()
  
  const [user, setUser] = useState(cardInitialVals)

  // On created and id change
  useEffect(() => {
    // Loading details
    $http.get(`user/mobile/${id}`).then(res => {
      if(res.data){
        let res_user = res.data

        let new_state = {
          ...user
        }
        for(let key in user){
          if((res_user[key]!==undefined) && (res_user[key]!==null)){
            new_state[key] = res_user[key]
          }
        }
        setUser(new_state)
      }
    }).catch(err => {

    })
  }, [id])

  return (
    <div style={{ backgroundImage: `url(${user.theme}`, minHeight: "100vh" }}>
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 pt-2">
            <Share user={user} isFinal={true} />
          </div>
          <div className="col-lg-6 pb-4 pt-2">
            <MakeAccount user={user} />
          </div>
        </div>
      </Container>
    </div>
  );
}
