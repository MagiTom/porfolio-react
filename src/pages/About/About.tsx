import React from "react";
import BackgroundWithCircle from "../../components/BackgroundWithCircle/BackgroundWithCircle";
import Hero from "../../components/Hero/Hero";
import "./About.scss";
import EmploymentTable from "../../components/EmploymentTable/EmploymentTable";
import ButtonsPair from "../../components/ButtonsPair/ButtonsPair";

const About: React.FC = () => {
  return (
    <div className="about">
      <Hero></Hero>
      <BackgroundWithCircle topPosition="30%" size="250px">
        <div className="about_info">
          <h4>.../O mnie ...</h4>
          <p>
            Hello I'm Magda, <em>I'm front-end developer</em>. More than 3 years
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
            <ButtonsPair></ButtonsPair>
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
        <h1 className="about_work">Work</h1>
        <EmploymentTable></EmploymentTable>
      </BackgroundWithCircle>
    </div>
  );
};

export default About;
