import React from "react";
import "./Projects.scss";
import BackgroundWithCircle from "../../components/BackgroundWithCircle/BackgroundWithCircle";
import Button from "../../components/Button/Button";
import ButtonsPair from "../../components/ButtonsPair/ButtonsPair";
import portfolio from "../../assets/portfolio.png";
import songbook from "../../assets/songbook.png";
import songbookimage from "../../assets/songbook-image.png";
import portfolioImage from "../../assets/portfolio-image.png";
import songbooklogin from "../../assets/songbook-login.png";
import oldPortfolio from "../../assets/old-portfolio.png";
import oldImage from "../../assets/old-image.png";
import oldProjects from "../../assets/old-projects.png";
import projects from "../../constans/projects";
import { useTranslation } from "react-i18next";


const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const porfolioProject = projects[0];
  const songBook = projects[1];
  const backgroundCatcher = projects[2];
  const oldPortfolioProject = projects[3];
  return (
    <div className="project">
      <h4>.../{t('projects.pageTitle')}...</h4>
      <div className="project-list">
        <BackgroundWithCircle topPosition="90%" size="700px">
          <div className="project-item">
            <div className="project-description">
              <h3>{t(`${porfolioProject.title}`)}</h3>
              <div className="project-stack">
                {porfolioProject.stack.map((item, index) => (
                    <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p dangerouslySetInnerHTML={{ __html: t(`${porfolioProject.description}`)}} />
              <ButtonsPair onClick={() => window.open(porfolioProject.github, "_blank")}></ButtonsPair>
            </div>
            <div className="project-galery">
              <div className="project-rec project-top">
                <div className="project-btns">
                  <ButtonsPair web={true} onClick={() => window.open(porfolioProject.url, "_blank")}></ButtonsPair>
                </div>
                <img
                  src={portfolioImage}
                  alt=""
                />
              </div>
              <div className="project-shapes" onClick={() => window.open(porfolioProject.url, "_blank")}>
                <div className="project-rec">
                  <img
                    src={portfolioImage}
                    alt=""
                  />
                </div>
                <img src={portfolio} alt="Zewnętrzny obraz" />
              </div>
            </div>
          </div>
        </BackgroundWithCircle>

      
          <div className="project-item reverse">
            <div className="project-description">
              <h3>{t(`${songBook.title}`)}</h3>
              <div className="project-stack">
              {songBook.stack.map((item, index) => (
                    <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p dangerouslySetInnerHTML={{ __html: t(`${songBook.description}`)}} />
              <ButtonsPair onClick={() => window.open(porfolioProject.github, "_blank")}></ButtonsPair>
            </div>
            <div className="project-galery">
              <div className="project-rec">
                <div className="project-btns">
                  <ButtonsPair web={true} onClick={() => window.open(songBook.url, "_blank")}></ButtonsPair>
                </div>
                <img
                  src={songbookimage}
                  alt=""
                />
              </div>
              <div className="project-shapes" onClick={() => window.open(songBook.url, "_blank")}>
                <div className="project-rec project-bottom">
                  <div className="project-btns">
                    <ButtonsPair></ButtonsPair>
                  </div>
                  <img
                    src={songbookimage}
                    alt=""
                  />
                </div>
                <img src={songbook} alt="Zewnętrzny obraz" />
              </div>
              <div className="project-noAbsolute">
                <img
                  src={songbooklogin}
                  alt=""
                />
              </div>
            </div>
          </div>
       
        <BackgroundWithCircle topPosition="30%" size="300px">
          <div className="project-item">
            <div className="project-description">
              <h3>{t(`${backgroundCatcher.title}`)}</h3>
              <div className="project-stack">
              {backgroundCatcher.stack.map((item, index) => (
                    <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p dangerouslySetInnerHTML={{ __html: t(`${backgroundCatcher.description}`)}} />
              <ButtonsPair onClick={() => window.open(backgroundCatcher.github, "_blank")}></ButtonsPair>
            </div>
            <div className="project-galery">
            
              <div className="project-grid">
                <div className="div1"> 
                <div className="project-btns">
                  <ButtonsPair onClick={() => window.open(backgroundCatcher.github, "_blank")}></ButtonsPair>
                </div>
                </div>
                <div className="div2"> </div>
                <div className="div3"> </div>
                <div className="div4"> </div>
              </div>
            </div>
          </div>
        </BackgroundWithCircle>
        <BackgroundWithCircle topPosition="30%" size="600px">
          <div className="project-item reverse">
            <div className="project-description">
              <h3>{t(`${oldPortfolioProject.title}`)}</h3>
              <div className="project-stack">
              {oldPortfolioProject.stack.map((item, index) => (
                    <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p dangerouslySetInnerHTML={{ __html: t(`${oldPortfolioProject.description}`)}} />
              <ButtonsPair onClick={() => window.open(oldPortfolioProject.github, "_blank")}></ButtonsPair>
            </div>
            <div className="project-galery">
              <div className="project-rec project-top">
                <div className="project-btns">
                  <ButtonsPair web={true} onClick={() => window.open(oldPortfolioProject.url, "_blank")}></ButtonsPair>
                </div>
                <img
                  src={oldPortfolio}
                  alt=""
                />
              </div>
              <div className="project-shapes">
                <div className="project-rec">
                  <img
                    src={oldImage}
                    alt=""
                  />
                </div>
                <img src={oldProjects} alt="Zewnętrzny obraz" />
              </div>

            </div>
          </div>
        </BackgroundWithCircle>
      </div>
    </div>
  );
};

export default Projects;
