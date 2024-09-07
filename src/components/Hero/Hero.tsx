import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import EastIcon from "@mui/icons-material/East";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";
import CustomCarousel from "../Carousel/CustomCarousel";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import media from "../../constans/links";
import { useNavigate } from "react-router-dom";
import Projects from "../../constans/projects";

interface Props {
  // Typowanie propsów
}
const items = Projects;

const ComponentName: React.FC<Props> = (props) => {
   const navigate = useNavigate(); 
  return (
    <div className={styles.hero}>
      <div className={styles.hero_header}>
        <h1>Front-end</h1>
        <h1>Developer</h1>
        <p>
          Z pasją do tworzenia
          <em> nowoczesnych, kreatywnych i funkcjonalnych</em> aplikacji.
        </p>
        <div className={styles.hero_buttons}>
          <Button theme="light" onClick={() => navigate("/projects")}>
            <span style={{ padding: "0 3em" }}>Projects</span>
          </Button>
          <ButtonCircle theme="light" onClick={() => navigate("/projects")}>
            <EastIcon style={{ color: "var(--theme-medium)" }} />
          </ButtonCircle>
        </div>
      </div>
      <div className={styles.hero_media}>
        <Button
          theme="dark"
          onClick={() => window.open(media.github, "_blank")}
        >
          <GitHubIcon style={{ color: "var(--theme-light)" }} />{" "}
          <span>Github</span>
        </Button>
        <Button
          theme="dark"
          onClick={() => window.open(media.linkedin, "_blank")}
        >
          <LinkedInIcon style={{ color: "var(--theme-light)" }} />{" "}
          <span>Linkedin </span>
        </Button>
        <Button
          theme="dark"
          onClick={() => window.open(media.facebook, "_blank")}
        >
          <FacebookIcon style={{ color: "var(--theme-light)" }} />{" "}
          <span>Facebook</span>
        </Button>
        <Button
          theme="dark"
          onClick={() => window.open(media.instagram, "_blank")}
        >
          <InstagramIcon style={{ color: "var(--theme-light)" }} />{" "}
          <span>Instagram</span>
        </Button>
        <Button
          theme="dark"
          onClick={() => window.open(media.codePen, "_blank")}
        >
          <CodeIcon style={{ color: "var(--theme-light)" }} />{" "}
          <span>CodePen</span>
        </Button>
      </div>
      <CustomCarousel items={items} />
    </div>
  );
};

export default ComponentName;
