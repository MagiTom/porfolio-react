import { useGSAP } from "@gsap/react";
import EastIcon from "@mui/icons-material/East";
import { gsap, Power3 } from 'gsap';
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Projects from "../../constans/projects";
import Button from "../Button/Button";
import ButtonCircle from "../ButtonCircle/ButtonCircle";
import CustomCarousel from "../Carousel/CustomCarousel";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./Hero.module.scss";
gsap.registerPlugin(useGSAP);

interface Props {
  // Typowanie propsów
}
const items = Projects;

const ComponentName: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const word1 = React.useRef<HTMLHeadingElement>(null);
  const word2 = React.useRef<HTMLHeadingElement>(null);
  const container = React.useRef<HTMLDivElement>(null);
  const tl = React.useRef<any>(null);
  useGSAP(
    () => {
      tl.current = gsap.timeline().from([word1.current, word2.current], {
        opacity: 0,
        y: "100",
        skewY: 10,
        stagger: 0.4,
        ease: Power3.easeOut,
        delay: .4
      });
    },
    { scope: container }
  );
  return (
    <div className={styles.hero}>
      <div ref={container} className={styles.hero_header}>
        <h1 ref={word1}>Front-end</h1>
        <h1 ref={word2}>Developer</h1>
        <p dangerouslySetInnerHTML={{ __html: t("hero.description") }}></p>
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
