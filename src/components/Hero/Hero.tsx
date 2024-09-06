import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import EastIcon from '@mui/icons-material/East';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import CustomCarousel from "../Carousel/CustomCarousel";
import ButtonCircle from "../ButtonCircle/ButtonCircle";

interface Props {
  // Typowanie propsów
}
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

const ComponentName: React.FC<Props> = (props) => {
  return (
  
      <div className={styles.hero}>
        <div className={styles.hero_header}>
          <h1>Front-end</h1>
          <h1>Developer</h1>
          <p>
            Lorem ipsum <em>dolor sit amet </em>consectetur adipisicing elit. Vero, culpa
            laudantium tempora corrupti dolorem illo necessitatibus repellat
            iure facilis nemo
          </p>
          <div className={styles.hero_buttons}>
          <Button theme="light" onClick={() => alert("Clicked!")}>
            <span style={{padding: '0 3em'}}>Projects</span>
          </Button>
          <ButtonCircle theme="light" onClick={() => alert("Clicked!")}>
          <EastIcon style={{ color: 'var(--theme-medium)' }} />
          </ButtonCircle>
          </div>
        </div>
        <div className={styles.hero_media}>
        <Button theme="dark" onClick={() => alert("Clicked!")}>
           <GitHubIcon style={{ color: 'var(--theme-light)' }} /> <span>Github</span>
        </Button>
        <Button theme="dark" onClick={() => alert("Clicked!")}>
           <LinkedInIcon style={{ color: 'var(--theme-light)' }} /> <span>Linkedin</span>
        </Button>
        <Button theme="dark" onClick={() => alert("Clicked!")}>
           <LinkedInIcon style={{ color: 'var(--theme-light)' }} /> <span>Linkedin</span>
        </Button>
        <Button theme="dark" onClick={() => alert("Clicked!")}>
           <FacebookIcon style={{ color: 'var(--theme-light)' }} /> <span>Facebook</span>
        </Button>
        <Button theme="dark" onClick={() => alert("Clicked!")}>
           <InstagramIcon style={{ color: 'var(--theme-light)' }} /> <span>Instagram</span>
        </Button>
        <Button theme="dark" onClick={() => alert("Clicked!")}>
           <CodeIcon style={{ color: 'var(--theme-light)' }} /> <span>CodePen</span>
        </Button>
        </div>
<CustomCarousel items={items} />
      </div>
  );
};

export default ComponentName;
