import { Title } from "../../Globe.js";
import { Row, Col } from "react-bootstrap";
import { Cafemale, CaMale, CaOther } from "../../../assets/img/paths";
import DefaultAvatar from "../../../assets/img/default_avatar.jpg";


function TitleBlock({ name, color, gender, profile_picture_url }) {
 var GenderIcon;
 
  if ( gender === "M") {
     GenderIcon= <CaMale/>;
  } 
  else if ( gender === "F"){
    GenderIcon = <Cafemale/>;
  }
  else 
  {
    GenderIcon = <CaOther/>
  }


  return (
    <div className="mt-5">
      <Title>
        <Row>
          <img
            src={profile_picture_url ? profile_picture_url : DefaultAvatar}
            className="avatar mb-2"
            style={{ margin: "auto", border: `4px solid ${color}` }}
            alt="Avatar"
          />
        </Row>
        <Row >
        <Col align="center d-flex">
          <div>
            <h5 >{name}</h5>
          </div>
          <div>({GenderIcon})</div>
          </Col>
        </Row>
      </Title>
    </div>
  );
}

export default TitleBlock;
