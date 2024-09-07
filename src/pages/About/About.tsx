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
          Cześć, jestem Magda, 
          Pasjonuję się światem <em>front-endu</em> i każdego dnia odkrywam w nim coś nowego. Praca w tej branży stawia przede mną <em>ekscytujące wyzwania</em>, 
          które pozwalają mi łączyć <em>kreatywność z funkcjonalnością</em>. Uwielbiam tworzyć projekty, które nie tylko wyglądają świetnie, ale też oferują <em>intuicyjne i przemyślane rozwiązania</em>. Wymaga to zarówno analitycznego myślenia, jak i artystycznego podejścia. Na co dzień pracuję z <em>Angularem</em>, a po godzinach rozwijam się, korzystając z <em>Reacta</em>,
          dzięki czemu poszerzam swoje horyzonty i pozostaję na bieżąco z najnowszymi trendami w świecie front-endu.
          </p>
        </div>
        <div className="about_stack">
          <div className="about_img"></div>
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
                <p>Technologie, których dopiero się uczę</p>
            </div>
            <div className="about_item">
              <h4>W trakcie nauki</h4>
              <p>
                Vue / Node.js / Express 
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
