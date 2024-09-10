import React from "react";
import BackgroundWithCircle from "../../components/BackgroundWithCircle/BackgroundWithCircle";
import Hero from "../../components/Hero/Hero";
import "./About.scss";
import EmploymentTable from "../../components/EmploymentTable/EmploymentTable";
import ButtonsPair from "../../components/ButtonsPair/ButtonsPair";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <Hero></Hero>
      <BackgroundWithCircle topPosition="30%" size="250px">
        <div className="about_info">
          <h4>{t('about.pageTitle')}</h4>
          <p dangerouslySetInnerHTML={{ __html: t('about.description')}}>
          </p>
        </div>
        <div className="about_section">
          <div className="about_img"></div>
        <div className="about_stack">
          <div className="about_wrapper">
            <div className="about_item--accent">
              <h4>Front-end</h4>
              <p>
                Javascript / Typesript / Angular / Ionic / Capacitor / Rxjs / Ngrx / React / Redux / React Native / Git / Firebase / Sqlite
              </p>
            </div>
            <ButtonsPair></ButtonsPair>
          </div>

          <div className="about_item">
            <h4>Style</h4>
            <p>
              Sass / Angular Material / Bootstrap / MUI / PrimeNg / Gsap / Chart.js
            </p>
          </div>
          <div className="about_wrapper">
          <div className="about_additional">
                <p>{t('about.technology')}</p>
            </div>
            <div className="about_item">
              <h4>{t('about.inProgress')}</h4>
              <p>
                Vue / Node.js / Express 
              </p>
            </div>
          
          </div>
        </div>
        </div>
        <div className="about_work">
        <h1>{t("about.work")}</h1>
        <EmploymentTable></EmploymentTable>
        </div>
      </BackgroundWithCircle>
    </div>
  );
};

export default About;
