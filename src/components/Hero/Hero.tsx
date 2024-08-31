import React from "react";
import BackgroundWithCircle from "../BackgroundWithCircle/BackgroundWithCircle";
import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.scss";

interface Props {
  // Typowanie propsów
}

const ComponentName: React.FC<Props> = (props) => {
  return (
    <BackgroundWithCircle topPosition="30%" size="150px">
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.hero_header}>
            <h1>Front-end</h1>
            <h1>Developer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              culpa laudantium tempora corrupti dolorem illo necessitatibus
              repellat iure facilis nemo 
            </p>
            <button>click</button>
        </div>
      </div>
    </BackgroundWithCircle>
  );
};

export default ComponentName;
