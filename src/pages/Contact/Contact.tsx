import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import { useTranslation } from "react-i18next";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./Contact.scss";
import Slide from "../../components/Slide/Slide";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <h4>.../{t("navbar.contact")}...</h4>
      <div className="contact-wrapper">
        <div className="contact-name">
          <Slide>
            <h1>Magdalena</h1>
          </Slide>
          <div className="contact-position">
            <Slide delay={0.6}>
              <p>
                Front-end <br />
                developer
              </p>
            </Slide>
            <Slide delay={0.3}>
              <h1>Tomala</h1>
            </Slide>
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
