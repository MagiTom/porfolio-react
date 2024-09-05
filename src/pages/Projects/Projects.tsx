import React from "react";
import "./Projects.scss";
import BackgroundWithCircle from "../../components/BackgroundWithCircle/BackgroundWithCircle";
import Button from "../../components/Button/Button";
import ButtonsPair from "../../components/ButtonsPair/ButtonsPair";
import nShape from "../../assets/n-shape.svg";
import lShape from "../../assets/l-shape.svg";

const Projects: React.FC = () => {
  return (
    <div className="project">
      <h4>.../Wybrane Projekty...</h4>
      <div className="project-list">
        <BackgroundWithCircle topPosition="30%" size="250px">
          <div className="project-item">
            <div className="project-description">
              <h3>Projekt 1</h3>
              <div className="project-stack">
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
              </div>
              <p>Opis projektu 1...</p>
              <ButtonsPair></ButtonsPair>
            </div>
            <div className="project-galery">
              <div className="project-rec project-top">
                <div className="project-btns">
                  <ButtonsPair></ButtonsPair>
                </div>
                <img
                  src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                  alt=""
                />
              </div>
              <div className="project-shapes">
                <div className="project-rec">
                  <img
                    src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                    alt=""
                  />
                </div>
                <img src={nShape} alt="Zewnętrzny obraz" />
              </div>
            </div>
          </div>
        </BackgroundWithCircle>
        <BackgroundWithCircle topPosition="30%" size="250px">
          <div className="project-item">
            <div className="project-description">
              <h3>Projekt 1</h3>
              <div className="project-stack">
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
              </div>
              <p>Opis projektu 1...</p>
              <ButtonsPair></ButtonsPair>
            </div>
            <div className="project-galery">
              <div className="project-rec">
                <div className="project-btns">
                  <ButtonsPair></ButtonsPair>
                </div>
                <img
                  src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                  alt=""
                />
              </div>
              <div className="project-shapes">
                <div className="project-rec project-bottom">
                  <div className="project-btns">
                    <ButtonsPair></ButtonsPair>
                  </div>
                  <img
                    src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                    alt=""
                  />
                </div>
                <img src={lShape} alt="Zewnętrzny obraz" />
              </div>
              <div className="project-noAbsolute">
                <img
                  src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </BackgroundWithCircle>
        <BackgroundWithCircle topPosition="30%" size="250px">
          <div className="project-item">
            <div className="project-description">
              <h3>Projekt 1</h3>
              <div className="project-stack">
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
                <Button theme="dark" onClick={() => alert("Clicked!")}>
                  <span>Github</span>
                </Button>
              </div>
              <p>Opis projektu 1...</p>
              <ButtonsPair></ButtonsPair>
            </div>
            <div className="project-galery">
              <div className="project-rec project-top">
                <div className="project-btns">
                  <ButtonsPair></ButtonsPair>
                </div>
                <img
                  src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                  alt=""
                />
              </div>
              <div className="project-shapes">
                <div className="project-rec">
                  <img
                    src="https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU"
                    alt=""
                  />
                </div>
                <img src={nShape} alt="Zewnętrzny obraz" />
              </div>

              <div className="project-grid">
                <div className="div1"> 
                <div className="project-btns">
                  <ButtonsPair></ButtonsPair>
                </div>
                </div>
                <div className="div2"> </div>
                <div className="div3"> </div>
                <div className="div4"> </div>
              </div>
            </div>
          </div>
        </BackgroundWithCircle>
      </div>
    </div>
  );
};

export default Projects;
