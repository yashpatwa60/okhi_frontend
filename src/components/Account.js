import React from "react";
import ContactDetails from "./dashboard/Card/Contact.js";
import CompanyDetails from "./dashboard/Card/Company.js";
import ProfileDetails from "./dashboard/Card/Profile.js";
import TitleBlock from "./dashboard/Card/Title.js";
import FollowMe from "./dashboard/Card/FollowMe";
import { Container,Row, Col } from "react-bootstrap";

const MakeAccount = ({ user }) => {

  return (
    <div style={{'borderRadius' : '50px 50px', 'backgroundColor' : user.color}}>
      <Container>
        <Row>
          <Col md={12}>
            <TitleBlock name={user.name} color={user.color} 
              gender={user.gender}
              profile_picture={user.profile_picture}
              profile_picture_url={user.profile_picture_url}
            />
          </Col>

          <Col md={12}>
            <ContactDetails
              mobile={user.mobile}
              email={user.email}
              whatsapp={user.whatsapp}

              personal_upi={user.personal_upi}
              color={user.color}
              address = {user.address}
            />
          </Col>

          <Col md={12}>
            <ProfileDetails
              aboutme={user.aboutme}
              skills={user.skills}
              experience={user.experience}
              education={user.education}
              color={user.color}
            />
          </Col>

          <Col md={12}>
            <CompanyDetails
              company={user.company}
              company_email={user.company_email}
              company_website={user.company_website}
              company_address={user.company_address}
              company_bank = {user.company_bank}
              color={user.color}
            />
          </Col>

          <Col md={12}>
            <FollowMe
              fb={user.fb}
              twitter={user.twitter}
              linkedin={user.linkedin}
              instagram={user.instagram}
              youtube={user.youtube}
              github={user.github}
              skype={user.skype}
              color={user.color}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MakeAccount;
