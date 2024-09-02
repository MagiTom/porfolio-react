import React from "react";
import BackgroundWithCircle from "../../components/BackgroundWithCircle/BackgroundWithCircle";
import Hero from "../../components/Hero/Hero";
import "./About.scss";
import Button from "../../components/Button/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ButtonCircle from "../../components/ButtonCircle/ButtonCircle";

const About: React.FC = () => {
  return (
    <div className="about">
      <Hero></Hero>
      <BackgroundWithCircle topPosition="30%" size="250px">
        <div className="about_info">
          <h4>.../O mnie ...</h4>
          <p>
            Hello I'm Magda, I'm front-end developer. More than 3 years
            experience
          </p>
        </div>
        <div className="about_stack">
          <div className="about_img"></div>
          <div className="about_wrapper">
            <div className="about_item--accent">
              <h4>Front-end</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                fuga possimus dolorum ipsum pariatur, enim accusamus
              </p>
            </div>
            <div className="about_buttons">
              <ButtonCircle theme="dark" onClick={() => alert("Clicked!")}>
                <GitHubIcon style={{ color: "var(--theme-light)" }} />
              </ButtonCircle>
              <ButtonCircle theme="light" onClick={() => alert("Clicked!")}>
                <NorthEastIcon style={{ color: "var(--theme-dark)" }} />
              </ButtonCircle>
            </div>
          </div>

          <div className="about_item">
            <h4>Front-end</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              fuga possimus dolorum ipsum pariatur, enim accusamus
            </p>
          </div>
          <div className="about_wrapper">
          <div className="about_additional">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.</p>
            </div>
            <div className="about_item">
              <h4>Front-end</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                fuga possimus dolorum ipsum pariatur, enim accusamus
              </p>
            </div>
          
          </div>
        </div>
      </BackgroundWithCircle>
    </div>
  );
};

export default About;
