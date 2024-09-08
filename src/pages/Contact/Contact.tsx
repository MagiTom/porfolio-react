import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import EmailIcon from '@mui/icons-material/Email';
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h4>.../Kontakt...</h4>
      <div className="contact-wrapper">
        <div className="contact-name">
          <h1>Magdalena</h1>
          <div className="contact-position">
            <p>
              Front-end <br />
              developer
            </p>
            <h1>Tomala</h1>
          </div>
        </div>
        <div className="contact-email">
          <p>mag.tomala1@gmail.com</p>
          <a href="mailto:mag.tomala1@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="contact-media">
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default Contact;
