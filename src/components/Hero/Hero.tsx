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
import SocialMedia from "../SocialMedia/SocialMedia";
import { useTranslation } from "react-i18next";

interface Props {
  // Typowanie propsów
}
const items = Projects;

const ComponentName: React.FC<Props> = (props) => {
   const navigate = useNavigate(); 
   const { t } = useTranslation();
  return (
    <div className={styles.hero}>
      <div className={styles.hero_header}>
        <h1>Front-end</h1>
        <h1>Developer</h1>
        <p dangerouslySetInnerHTML={{ __html: t('hero.description')}}>
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
      <SocialMedia></SocialMedia>
      <CustomCarousel items={items} />
    </div>
  );
};

export default ComponentName;
