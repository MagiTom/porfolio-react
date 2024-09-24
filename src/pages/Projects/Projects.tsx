import React from "react";
import { useTranslation } from "react-i18next";
import oldImage from "../../assets/old-image.png";
import oldPortfolio from "../../assets/old-portfolio.png";
import oldProjects from "../../assets/old-projects.png";
import portfolioImage from "../../assets/portfolio-image.png";
import portfolioImage2 from "../../assets/portfolio-image2.png";
import portfolio from "../../assets/portfolio.png";
import songbookimage from "../../assets/songbook-image.png";
import songbooklogin from "../../assets/songbook-login.png";
import songbook from "../../assets/songbook.png";
import BackgroundWithCircle from "../../components/BackgroundWithCircle/BackgroundWithCircle";
import Button from "../../components/Button/Button";
import ButtonsPair from "../../components/ButtonsPair/ButtonsPair";
import projects from "../../constans/projects";
import "./Projects.scss";
import Slide from "../../components/Slide/Slide";
import Smooth from "../../components/Smooth/Smooth";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const porfolioProject = projects[0];
  const songBook = projects[1];
  const backgroundCatcher = projects[2];
  const oldPortfolioProject = projects[3];
  return (
    <div className="project">
      <h4>.../{t("projects.pageTitle")}...</h4>
      <div className="project-intro">
        <p
          dangerouslySetInnerHTML={{
            __html: t("projects.intro"),
          }}
        />
      </div>
      <div className="project-list">
        <BackgroundWithCircle topPosition="90%" size="700px">
          <div className="project-item">
            <div className="project-description">
              <Slide>
                <h3>{t(`${porfolioProject.title}`)}</h3>
              </Slide>
              <div className="project-stack">
                {porfolioProject.stack.map((item, index) => (
                  <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`${porfolioProject.description}`),
                }}
              />
              <ButtonsPair
                onClick={() => window.open(porfolioProject.github, "_blank")}
              ></ButtonsPair>
            </div>

            <div className="project-galery">
              <Smooth>
                <div className="project-rec project-top">
                  <div className="project-btns">
                    <ButtonsPair
                      web={true}
                      onClick={() => window.open(porfolioProject.url, "_blank")}
                    ></ButtonsPair>
                  </div>
                  <img src={portfolioImage} alt="" />
                </div>
              </Smooth>

              <div
                className="project-shapes"
                onClick={() => window.open(porfolioProject.url, "_blank")}
              >
                <Smooth delay={0.3}>
                  <div className="project-rec">
                    <img src={portfolioImage2} alt="" />
                  </div>
                </Smooth>
                <Smooth delay={0.6}>
                  <img src={portfolio} alt="Zewnętrzny obraz" />
                </Smooth>
              </div>
            </div>
          </div>
        </BackgroundWithCircle>

        <div className="project-item reverse">
          <div className="project-description">
            <Slide>
              <h3>{t(`${songBook.title}`)}</h3>
            </Slide>
            <div className="project-stack">
              {songBook.stack.map((item, index) => (
                <Button key={index} theme="dark">
                  <span>{item}</span>
                </Button>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: t(`${songBook.description}`) }}
            />
            <ButtonsPair
              onClick={() => window.open(porfolioProject.github, "_blank")}
            ></ButtonsPair>
          </div>

          <div className="project-galery">
            <Smooth>
              <div
                className="project-shapes"
                onClick={() => window.open(songBook.url, "_blank")}
              >
                <div className="project-rec project-bottom">
                  <div className="project-btns">
                    <ButtonsPair></ButtonsPair>
                  </div>
                  <img src={songbookimage} alt="" />
                </div>

                <img src={songbook} alt="Zewnętrzny obraz" />
              </div>
            </Smooth>
            <Smooth delay={0.3}>
              <div className="project-noAbsolute">
                <img src={songbooklogin} alt="" />
              </div>
            </Smooth>
          </div>
        </div>

        <BackgroundWithCircle topPosition="30%" size="300px">
          <div className="project-item">
            <div className="project-description">
              <Slide>
                <h3>{t(`${backgroundCatcher.title}`)}</h3>
              </Slide>
              <div className="project-stack">
                {backgroundCatcher.stack.map((item, index) => (
                  <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`${backgroundCatcher.description}`),
                }}
              />
              <ButtonsPair
                onClick={() => window.open(backgroundCatcher.github, "_blank")}
              ></ButtonsPair>
            </div>
            <Smooth>
              <div className="project-galery">
                <div className="project-grid">
                  <div className="div1">
                    <div className="project-btns">
                      <ButtonsPair
                        onClick={() =>
                          window.open(backgroundCatcher.github, "_blank")
                        }
                      ></ButtonsPair>
                    </div>
                  </div>
                  <div className="div2"> </div>
                  <div className="div3"> </div>
                  <div className="div4"> </div>
                </div>
              </div>
            </Smooth>
          </div>
        </BackgroundWithCircle>
        <BackgroundWithCircle topPosition="30%" size="600px">
          <div className="project-item reverse">
            <div className="project-description">
              <Slide>
                <h3>{t(`${oldPortfolioProject.title}`)}</h3>
              </Slide>
              <div className="project-stack">
                {oldPortfolioProject.stack.map((item, index) => (
                  <Button key={index} theme="dark">
                    <span>{item}</span>
                  </Button>
                ))}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(`${oldPortfolioProject.description}`),
                }}
              />
              <ButtonsPair
                onClick={() =>
                  window.open(oldPortfolioProject.github, "_blank")
                }
              ></ButtonsPair>
            </div>
            <div className="project-galery">
              <Smooth>
                <div className="project-rec project-top">
                  <div className="project-btns">
                    <ButtonsPair
                      web={true}
                      onClick={() =>
                        window.open(oldPortfolioProject.url, "_blank")
                      }
                    ></ButtonsPair>
                  </div>
                  <img src={oldPortfolio} alt="" />
                </div>
              </Smooth>
              <div className="project-shapes">
                <Smooth delay={0.3}>
                  <div className="project-rec">
                    <img src={oldImage} alt="" />
                  </div>
                </Smooth>
                <Smooth delay={0.6}>
                  <img src={oldProjects} alt="Zewnętrzny obraz" />
                </Smooth>
              </div>
            </div>
          </div>
        </BackgroundWithCircle>
      </div>
    </div>
  );
};

export default Projects;
